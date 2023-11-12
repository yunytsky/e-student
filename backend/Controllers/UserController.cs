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
    [Route("api/[controller]")]
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
                return Ok($"Name: {currentUser.Name}, number: {currentUser.StudentNumber}");    
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
    }
}
