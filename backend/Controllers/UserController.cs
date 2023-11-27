using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using E_Student.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
    [Route("")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("student-profile")]
        [Authorize]
        public IActionResult StudentProfileEndpoint()
        {
            var currentUser = GetCurrentUser();
            if (currentUser != null)
            {
                return Ok($"Here will be all the necessary information about student.\n Name: {currentUser.Name}, number: {currentUser.StudentNumber}");    
            }

            return NotFound("Something went wrong.");
        }
        
        [HttpGet("dorm-profile")]
        [Authorize(Roles = "Dorm resident")]
        public IActionResult DormProfileEndpoint()
        {
            var currentUser = GetCurrentUser();
            var currentStudent = GetCurrentStudent();
            var currentDormResident = GetCurrentDormResident();
            if (currentUser != null)
            {
                return Ok($"Here will be all the necessary information about dorm resident\n Number: {currentUser.Name}, number: {currentUser.StudentNumber}");
            }

            return NotFound("Something went wrong.");
        }

        [HttpGet("public")]
        public IActionResult PublicEndpoint()
        {
            return Ok("Omg hiiiii :333");
        }
        
        private UserModel GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;
                var currentUser = UserConstants.Users.FirstOrDefault(o =>
                    o.StudentNumber == userClaims.FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value);
                return currentUser;
            }

            return null;
        }
        
        private StudentModel GetCurrentStudent()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;
                var currentStudent = StudentConstants.Students.FirstOrDefault(o =>
                    o.Number == userClaims.FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value);
                return currentStudent;
            }

            return null;
        }
        
        private UserModel GetCurrentDormResident()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;
                var currentUser = UserConstants.Users.FirstOrDefault(o =>
                    o.StudentNumber == userClaims.FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value);
                return currentUser;
            }

            return null;
        }
    }
}
