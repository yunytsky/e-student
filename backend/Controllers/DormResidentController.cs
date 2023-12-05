using E_Student.Models;
using E_Student.Services;
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
    }
}
