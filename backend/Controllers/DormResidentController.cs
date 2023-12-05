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
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task RenewLocalDatabase()
        {
            var allDormResidents = await _dormResident.GetAll();
            foreach (var dormResident in allDormResidents)
            {
                if(!DormResidentConstants.DormResidents.Contains(dormResident))
                    DormResidentConstants.DormResidents.Add(dormResident);
            }
        }
       
        public async Task<IActionResult> Get()
        {
            var allDormResidents = await _dormResident.GetAll();
            if (allDormResidents.Any())
                return Ok(allDormResidents);
            return NotFound();
        }
      
        public async Task<IActionResult> Get(string id)
        {
            var dormResident = await _dormResident.Get(id);
            if (dormResident is null)
                return NotFound();
            return Ok(dormResident);
        }
        
        /*public async Task<IActionResult> Add(DormResidentModel dormResident)
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
      
        public async Task<IActionResult> Delete(string id)
        {
            var existingdormres = await _dormResident.Get(id);
            if (existingdormres is null)
                return BadRequest();
            await _dormResident.Delete(id);

            return NoContent();
        }*/
    }
}
