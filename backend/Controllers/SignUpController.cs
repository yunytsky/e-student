using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using E_Student.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace E_Student.Controllers
{
    [Route("/sign-up")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private IConfiguration _config;
        DBController controller = DBController.GetInstance();

        public SignUpController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult SignUp([FromBody] UserSignUp userSignUp)
        {
            UserModel user;
            try
            {
                user = CreateUser(userSignUp);
                
                var token = GenerateToken(user);
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        private UserModel CreateUser(UserSignUp userSignUp)
        {
            var currentStudent = controller.GetStudent(userSignUp.StudentNumber);
            if (currentStudent == null)
                throw new Exception($"There is no student with number {userSignUp.StudentNumber}.");
            
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
