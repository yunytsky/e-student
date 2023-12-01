using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Security;
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
    [Route("/sign-in")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        private IConfiguration _config;
        DBController controller = DBController.GetInstance();

        public SignInController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
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
                    return NotFound("Invalid student number");
                return NotFound(e.Message);
            }

            if (user != null)
            {
                var currentStudent = controller.GetStudent(userSignIn.StudentNumber);
                if (currentStudent != null)
                {
                    user.Name = currentStudent.FullName;
                    user.IsDormResident = controller.GetDormResident(currentStudent.FullName) != null;
                    var token = GenerateToken(user);
                    return Ok(token);
                }
            }

            return NotFound("User not found");
        }

        private UserModel Authenticate(UserSignIn userSignIn)
        {
            var currentUser = controller.GetUser(userSignIn.StudentNumber);
            
            if (currentUser.Password != userSignIn.Password)
                throw new Exception("Password doesn't match");
            
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
