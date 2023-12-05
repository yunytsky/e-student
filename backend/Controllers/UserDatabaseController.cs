using E_Student.Models;
using E_Student.Services;
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
       
        public async Task<IActionResult> Get(string id)
        {
            var student = await _user.Get(id);
            if (student is null)
                return NotFound();
            return Ok(student);
        }

        public async Task<IActionResult> Add(UserModel user)
        {
            await _user.Create(user);
            return CreatedAtAction(nameof(Get), new { id = user.StudentNumber }, user);
        }
    }
}
    
