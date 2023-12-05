using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
    public class UserDatabaseController : Controller
    {
        private readonly UserService _user;
        
        public UserDatabaseController(UserService user)
        {
            _user = user;
            RenewLocalDatabase().GetAwaiter().GetResult();
        }

        public async Task RenewLocalDatabase()
        {
            var allUsers = await _user.GetAll();
            foreach (var user in allUsers)
            {
                if (!UserConstants.Users.Contains(user))
                    UserConstants.Users.Add(user);
            }
        }
        
        public async Task<IActionResult> Get()
        {
            var allStudents = await _user.GetAll();
            if (allStudents.Any())
                return Ok(allStudents);
            return NotFound();
        }
       
        public async Task<IActionResult> Get(string number)
        {
            var student = await _user.Get(number);
            if (student is null)
                return NotFound();
            return Ok(student);
        }

        public async Task<IActionResult> Add(UserModel user)
        {
            await _user.Create(user);
            return CreatedAtAction(nameof(Get), new { id = user.StudentNumber }, user);
        }
        
        public async Task<IActionResult> Update(string id, UserModel user)
        {
            var existingUser = await _user.Get(id);
            if (existingUser is null)
                return BadRequest();
            user.StudentNumber = existingUser.StudentNumber;
            await _user.Update(id, user);

            return NoContent();
        }
    }
}
    
