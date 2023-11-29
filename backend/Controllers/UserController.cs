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
        DBController controller = DBController.GetInstance();
        
        [HttpGet("student-profile")]
        [Authorize]
        public IActionResult StudentProfileEndpoint()
        {
            var number = (HttpContext.User.Identity as ClaimsIdentity).Claims
                .FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value;
            
            var currentStudent = controller.GetStudent(number);
            
            if (currentStudent != null)
            {
                return Ok(currentStudent.GetFullInfo());
            }

            return NotFound("Something went wrong.");
        }
        
        [HttpGet("dorm-profile")]
        [Authorize(Roles = "Dorm resident")]
        public IActionResult DormProfileEndpoint()
        {
            var name = (HttpContext.User.Identity as ClaimsIdentity).Claims
                .FirstOrDefault(c => c.Type == ClaimTypes.GivenName)?.Value;
            
            var currentDormResident = controller.GetDormResident(name);
            
            if (currentDormResident != null)
            {
                return Ok($"Here will be all the necessary information about dorm resident\n" +
                          $" Name: {currentDormResident.FullName}, number: {currentDormResident.DormPassNumber}");
            }

            return NotFound("Something went wrong.");
        }

        [HttpGet("public")]
        public IActionResult PublicEndpoint()
        {
            return Ok("Omg hiiiii :333");
        }
    }
}
