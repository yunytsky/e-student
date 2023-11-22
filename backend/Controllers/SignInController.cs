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
    [Route("api/[controller]")]
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
            UserModel user;
            try
            {
                user = CreateUser(userSignIn);
                
                var token = GenerateToken(user);
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        private UserModel CreateUser(UserSignIn userSignIn)
        {
            var currentStudent = FindStudent(userSignIn.StudentNumber);
            if (currentStudent == null)
                throw new Exception($"There is no student with number {userSignIn.StudentNumber}.");

            if (UserConstants.Users.FirstOrDefault(o => o.Username == userSignIn.Username) != null)
                throw new Exception($"User with name {userSignIn.Username} already exists.");
            
            var newUser = new UserModel()
            {
                //Email = userSignIn.Email, Username = userSignIn.Username, StudentNumber = userSignIn.StudentNumber,
                Password = userSignIn.Password, Name = currentStudent.FullName,
                IsDormResident = currentStudent.DormPassNumber != "OO 00000000"
            };
            
            UserConstants.Users.Add(newUser);
            return newUser;
        }

        private StudentModel FindStudent(string number)
        {
            var currentStudent = StudentConstants.Students.FirstOrDefault(o => o.Number == number);

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
                //new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.SerialNumber, user.StudentNumber),
                new Claim(ClaimTypes.GivenName, user.Name),
                new Claim(ClaimTypes.IsPersistent, user.IsDormResident.ToString())
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims,
                expires: DateTime.Now.AddMinutes(10), signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
