using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Http;
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

        /*public async Task<IActionResult> Get()
        {
            var allStudents = await _student.GetAll();
            if (allStudents.Any())
                return Ok(allStudents);
            return NotFound();

        }

        public async Task<IActionResult> Add(StudentModel student)
        {
            await _student.Create(student);
            return CreatedAtAction(nameof(Get), new { id = student.Number }, student);
        }
       
        public async Task<IActionResult> Update(string id, StudentModel student)
        {
            var existingstudent = await _student.Get(id);
            if (existingstudent is null)
                return BadRequest();
            student.Number = existingstudent.Number;
            await _student.Update(id, student);

            return NoContent();
        }
      
        public async Task<IActionResult> Delete(string id)
        {
            var existingstudent = await _student.Get(id);
            if (existingstudent is null)
                return BadRequest();
            await _student.Delete(id);

            return NoContent();
        }*/
    }
}
