using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using E_Student.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace E_Student.Controllers
{
    [Route("")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration _config;
        DBController controller;
        
        public UserController(IConfiguration config)
        {
            _config = config;
            controller = DBController.GetInstance();
        }
        
        [AllowAnonymous]
        [HttpPost("sign-in")]
        public IActionResult SignIn([FromBody] UserSignIn userSignIn)
        {
            UserModel user;
            try
            {
                user = Authenticate(userSignIn);
            }
            catch (Exception e)
            {
                if (e.Message == "Object reference not set to an instance of an object.")
                    return NotFound("Неправильний номер студентського квитка.");
                return NotFound(e.Message);
            }

            if (user != null)
            {
                var currentStudent = controller.GetStudent(userSignIn.StudentNumber);
                if (currentStudent != null)
                {
                    var token = GenerateToken(user);
                    return Ok(token);
                }
            }

            return NotFound("Використувач не знайдений.");
        }
        
        [AllowAnonymous]
        [HttpPost("sign-up")]
        public IActionResult SignUp([FromBody] UserSignUp userSignUp)
        {
            try
            {
                if (controller.GetUser(userSignUp.StudentNumber) != null)
                    return BadRequest("Користувач з цим номером студентського квитка вже існує.");
                
                var token = GenerateToken(CreateUser(userSignUp));
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e);
            }
        }
        
        [HttpGet("user/student-profile")]
        [Authorize]
        public IActionResult StudentProfileEndpoint()
        {
            var number = (HttpContext.User.Identity as ClaimsIdentity).Claims
                .FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value;
            
            var currentStudent = controller.GetStudent(number);
            
            if (currentStudent != null)
            {
                return Ok(JsonSerializer.Serialize(new StudentInfo(currentStudent)));
            }

            return NotFound("Такого студента не існує.");
        }
        
        [HttpGet("user/dorm-profile")]
        [Authorize(Roles = "Dorm resident")]
        public IActionResult DormProfileEndpoint()
        {
            var name = (HttpContext.User.Identity as ClaimsIdentity).Claims
                .FirstOrDefault(c => c.Type == ClaimTypes.GivenName)?.Value;
            
            var currentDormResident = controller.GetDormResident(name);
            
            if (currentDormResident != null)
            {
                return Ok(JsonSerializer.Serialize(new DormResidentInfo(currentDormResident)));
            }

            return NotFound("Такого мешканця гуртожитку не існує.");
        }

        private UserModel CreateUser(UserSignUp userSignUp)
        {
            var currentStudent = controller.GetStudent(userSignUp.StudentNumber);
            if (currentStudent == null)
                throw new Exception($"Студента з номером студентського квитка {userSignUp.StudentNumber} немає.");
            
            var newUser = new UserModel()
            {
                StudentNumber = userSignUp.StudentNumber,
                Password = userSignUp.Password,
                Name = currentStudent.FullName,
                IsDormResident = controller.GetDormResident(currentStudent.FullName) != null
            };
            
            controller.AddNewUser(newUser);
            return newUser;
        }

        private UserModel Authenticate(UserSignIn userSignIn)
        {
            var currentUser = controller.GetUser(userSignIn.StudentNumber);
            
            if (currentUser.Password != userSignIn.Password)
                throw new Exception("Неправильний пароль.");
            
            if (currentUser != null)
                return currentUser;

            return null;
        }

        private string GenerateToken(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.SerialNumber, user.StudentNumber),
                new Claim(ClaimTypes.GivenName, user.Name),
                new Claim(ClaimTypes.Role, user.IsDormResident ? "Dorm resident" : "Not dorm resident")
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims,
                expires: DateTime.Now.AddDays(1), signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
