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

        public SignInController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult SignIn([FromBody] UserSignIn userSignIn)
        {
            var user = Authenticate(userSignIn);

            if (user != null)
            {
                var student = FindStudent(user);
                if (student != null)
                {
                    user.Name = student.FullName;
                    user.IsDormResident = student.DormNumber != "";
                    var token = GenerateToken(user);
                    return Ok(token);
                }

                return Ok("Студента нема?");
            }

            return NotFound("User not found");
        }

        private UserModel Authenticate(UserSignIn userSignIn)
        {
            var currentUser = UserConstants.Users.FirstOrDefault(o => 
                (o.Username == userSignIn.InputString ||
                 o.StudentNumber == userSignIn.InputString) && o.Password == userSignIn.Password);

            if (currentUser != null)
                return currentUser;

            return null;
        }

        private StudentModel FindStudent(UserModel user)
        {
            var currentStudent = StudentConstants.Students.FirstOrDefault(o =>
                o.Number == user.StudentNumber);

            if (currentStudent != null)
            {
                return currentStudent;
            }

            return null;
        }

        private string GenerateToken(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.SerialNumber, user.StudentNumber),
                new Claim(ClaimTypes.GivenName, user.Name),
                new Claim(ClaimTypes.Role, user.IsDormResident ? "Dorm resident" : "Not dorm resident")
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims,
                expires: DateTime.Now.AddMinutes(10), signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
