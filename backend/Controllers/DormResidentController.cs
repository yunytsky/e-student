using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class DormResidentController : Controller
    {
        private readonly DormResidentService _dormResident;
        

        public DormResidentController(DormResidentService dormResident) {
            _dormResident = dormResident;
            RenewLocalDatabase();
         }

        public async void RenewLocalDatabase()
        {
            var AllDormResidents = await _dormResident.GetAll();
            //StudentConstants.Students.Add(AllStudents);
            foreach (var dormResident in AllDormResidents)
            {
                if(!DormResidentConstants.DormResidents.Contains(dormResident))
                DormResidentConstants.DormResidents.Add(dormResident);
            }

        }

        // GET: StudentController
       
        public async Task<IActionResult> Get()
        {
            var AllDormResidents = await _dormResident.GetAll();
            if (AllDormResidents.Any())
                return Ok(AllDormResidents);
            return NotFound();

        }

        // GET: StudentController/Details/5
      
        public async Task<IActionResult> Get(string id)
        {
            var dormResident = await _dormResident.Get(id);
            if (dormResident is null)
                return NotFound();
            return Ok(dormResident);

        }


        // POST: StudentController/Create
        
        public async Task<IActionResult> Add(DormResidentModel dormResident)
        {
            await _dormResident.Create(dormResident);
            return CreatedAtAction(nameof(Get), new { id = dormResident.DormPassNumber }, dormResident);

        }

       
        public async Task<IActionResult> Update(string id, DormResidentModel dormResident)
        {
            var existingstudent = await _dormResident.Get(id);
            if (existingstudent is null)
                return BadRequest();
            dormResident.DormPassNumber = existingstudent.DormPassNumber;
            await _dormResident.Update(id, dormResident);

            return NoContent();

        }


        // GET: StudentController/Delete/5
      
        public async Task<IActionResult> Delete(string id)
        {
            var existingdormres = await _dormResident.Get(id);
            if (existingdormres is null)
                return BadRequest();
            await _dormResident.Delete(id);

            return NoContent();
        }


    }
}
