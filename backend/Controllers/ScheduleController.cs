using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class ScheduleController : Controller
    {
        private readonly ScheduleService _schedules;

        public ScheduleController(ScheduleService schedules) {
            _schedules = schedules;
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task RenewLocalDatabase()
        {
            var allSchedules = await _schedules.GetAll();
            foreach (var schedule in allSchedules)
            {
                if(!ScheduleConstants.Schedules.Contains(schedule) && !ContainsGroup(schedule))
                    ScheduleConstants.Schedules.Add(schedule);
            }
        }

        private bool ContainsGroup(ScheduleModel schedule)
        {
            bool contains = false;
            
            foreach (var localSchedule in ScheduleConstants.Schedules)
            {
                if (localSchedule.group == schedule.group)
                    contains = true;
            }

            return contains;
        }
    }
}
