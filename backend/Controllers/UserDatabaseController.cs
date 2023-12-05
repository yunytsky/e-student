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
            RenewLocalDatabase();
        }

        public async void RenewLocalDatabase()
        {
            var AllUsers = await _user.GetAll();
            //StudentConstants.Students.Add(AllStudents);
            foreach (var user in AllUsers)
            {
                if (!UserConstants.Users.Contains(user))
                    UserConstants.Users.Add(user);
            }

        }
       
           
           

       
        public async Task<IActionResult> Get()
        {
            var AllStudents = await _user.GetAll();
            if (AllStudents.Any())
                return Ok(AllStudents);
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

        
        public async Task<IActionResult> Update(string id, UserModel user)
        {
            var existinguser = await _user.Get(id);
            if (existinguser is null)
                return BadRequest();
            user.StudentNumber = existinguser.StudentNumber;
            await _user.Update(id, user);

            return NoContent();

        }


        public async Task<IActionResult> Delete(string id)
        {
            var existingstudent = await _user.Get(id);
            if (existingstudent is null)
                return BadRequest();
            await _user.Delete(id);

            return NoContent();
        }

    }
}
    
