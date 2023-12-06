using E_Student.Models;
using E_Student.Services;
using Microsoft.AspNetCore.Mvc;

namespace E_Student.Controllers
{
  
    public class ExamsScheduleController : Controller
    {
        private readonly ExamsScheduleService _examsSchedule;

        public ExamsScheduleController(ExamsScheduleService examsSchedule) {
            _examsSchedule = examsSchedule;
            RenewLocalDatabase().GetAwaiter().GetResult();
         }

        public async Task RenewLocalDatabase()
        {
            var allExams = await _examsSchedule.GetAll();
            foreach (var exam in allExams)
            {
                if(!ExamsScheduleConstants.Exams.Contains(exam) && !ContainsGroup(exam))
                    ExamsScheduleConstants.Exams.Add(exam);
            }
        }

        private bool ContainsGroup(ExamsScheduleModel exam)
        {
            bool contains = false;
            
            foreach (var localExam in ExamsScheduleConstants.Exams)
            {
                if (localExam.group == exam.group)
                    contains = true;
            }

            return contains;
        }
    }
}
