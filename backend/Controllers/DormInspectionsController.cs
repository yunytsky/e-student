using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class DormInspectionsController : Controller
    {
        private readonly DormInspectionsService _dormInspections;

        public DormInspectionsController(DormInspectionsService dormInspections) {
            _dormInspections = dormInspections;
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task RenewLocalDatabase()
        {
            var allDormInspections = await _dormInspections.GetAll();
            foreach (var dormInspection in allDormInspections)
            {
                if(!InspectionConstants.DormInspections.Contains(dormInspection))
                    InspectionConstants.DormInspections.Add(dormInspection);
            }
        }
    }
}
