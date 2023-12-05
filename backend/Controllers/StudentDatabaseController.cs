using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class StudentDatabaseController : Controller
    {
        private readonly StudentService _student;

        public StudentDatabaseController(StudentService student) {
            _student = student;
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task RenewLocalDatabase()
        {
            var allStudents = await _student.GetAll();
            foreach (var student in allStudents)
            {
                if (!StudentConstants.Students.Contains(student))
                    StudentConstants.Students.Add(student);
            }
        }

        public async Task<IActionResult> Get(string id)
        {
            var student = await _student.Get(id);
            if (student is null)
                return NotFound();
            return Ok(student);
        }
    }
}
