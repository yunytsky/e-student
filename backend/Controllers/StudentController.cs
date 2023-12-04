using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class StudentController : Controller
    {
        private readonly StudentService _student;
        

        public StudentController(StudentService student) {
            _student = student;
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task  RenewLocalDatabase()
        {
            var AllStudents = await _student.GetAll();
            //StudentConstants.Students.Add(AllStudents);
            foreach (var student in AllStudents)
            {
                if(!StudentConstants.Students.Contains(student))
                StudentConstants.Students.Add(student);
            }

        }

        // GET: StudentController
       
        public async Task<IActionResult> Get()
        {
            var AllStudents = await _student.GetAll();
            if (AllStudents.Any())
                return Ok(AllStudents);
            return NotFound();

        }

        // GET: StudentController/Details/5
      
        public async Task<IActionResult> Get(string id)
        {
            var student = await _student.Get(id);
            if (student is null)
                return NotFound();
            return Ok(student);

        }


        // POST: StudentController/Create
        
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


        // GET: StudentController/Delete/5
      
        public async Task<IActionResult> Delete(string id)
        {
            var existingstudent = await _student.Get(id);
            if (existingstudent is null)
                return BadRequest();
            await _student.Delete(id);

            return NoContent();
        }


    }
}
