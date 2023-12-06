using E_Student.Models;
using E_Student.Services;
using E_Student.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace E_Student.Controllers;


public class DBController : Controller
{
    private DBController() { }

    private static StudentDatabaseController _studentController;
    private static UserDatabaseController _userController;
    private static DormResidentController _dormResidentController;
    private static DormInspectionsController _dormInspectionsController;
    private static ExamsScheduleController _examsController;

    private static DBController _instance;
    
    private static readonly object _lock = new object();
    
    public static DBController GetInstance()
    {
        var connectionString = "mongodb+srv://admin:1NUwYyvFwIo@cluster0.hrf9vls.mongodb.net/";

        var studentsDatabaseSettings = Options.Create(new StudentsDatabaseSetings
        {
            ConnectionString = connectionString,
            DatabaseName = "Student",
            CollectionName = "E-Student"
        });
        var usersDatabaseSettings = Options.Create(new UserDatabaseSettings
        {
            ConnectionString = connectionString,
            DatabaseName = "User",
            CollectionName = "User"
        });
        var DormResidentDatabaseSettings = Options.Create(new DormResidentSettings
        {
            ConnectionString = connectionString,
            DatabaseName = "DormResidents",
            CollectionName = "DormResidents"
        });
        var DormInspectionsDatabaseSettings = Options.Create(new DormInspectionsSettings
        {
            ConnectionString = connectionString,
            DatabaseName = "DormInspections",
            CollectionName = "DormInspections"
        });
        var ExamsDatabaseSettings = Options.Create(new ExamsScheduleSettings()
        {
            ConnectionString = connectionString,
            DatabaseName = "Exams",
            CollectionName = "Exams"
        });
        if (_instance == null)
            lock (_lock)
                if (_instance == null)
                {
                    _instance = new DBController();
                    _studentController = new StudentDatabaseController(new StudentService(studentsDatabaseSettings));    
                    _userController = new UserDatabaseController(new UserService(usersDatabaseSettings));
                    _dormResidentController = new DormResidentController(new DormResidentService(DormResidentDatabaseSettings));
                    _dormInspectionsController = new DormInspectionsController(new DormInspectionsService(DormInspectionsDatabaseSettings));
                    _examsController = new ExamsScheduleController(new ExamsScheduleService(ExamsDatabaseSettings));
                }

        return _instance;
    }

    public void AddNewUser(UserModel newUser)
    {
        UserConstants.Users.Add(newUser);
        _userController.Add(newUser);
    }
    public void UpdateUserPassword(string number, string newPassword)
    {
        var currentUser = UserConstants.Users.FirstOrDefault(o => o.StudentNumber == number);

        var newUser = new UserModel()
        {
            StudentNumber = currentUser.StudentNumber, Password = newPassword,
            Name = currentUser.Name, IsDormResident = currentUser.IsDormResident,
            Id = currentUser.Id
        };

        UserConstants.Users.Remove(currentUser);
        UserConstants.Users.Add(newUser);
        _userController.Update(currentUser.StudentNumber, newUser);
    }
    public UserModel GetUser(string number)
    {
        //_userController.RenewLocalDatabase().GetAwaiter().GetResult();
        var currentUser = UserConstants.Users.FirstOrDefault(o => o.StudentNumber == number);
        
        if (currentUser != null)
        {
            return currentUser;
        }

        return null;
    }
    public StudentModel GetStudent(string number)
    {
        //_studentController.RenewLocalDatabase().GetAwaiter().GetResult();
       var currentStudent = StudentConstants.Students.FirstOrDefault(o => o.Number == number);

        if (currentStudent != null)
        {
            return currentStudent;
        }

        return null;
    }
    public DormResidentModel GetDormResident(string name)
    {
        //_dormResidentController.RenewLocalDatabase().GetAwaiter().GetResult();
        var currentDormResident = DormResidentConstants.DormResidents.FirstOrDefault(o => o.FullName == name);
        
        if (currentDormResident != null)
        {
            return currentDormResident;
        }

        return null;
    }

    public List<DormInspectionsModel> GetAllInspections()
    {
        _dormInspectionsController.RenewLocalDatabase().GetAwaiter().GetResult();
        return InspectionConstants.DormInspections;
    }
    
    public List<ExamsScheduleModel> GetAllExams()
    {
        _dormInspectionsController.RenewLocalDatabase().GetAwaiter().GetResult();
        return ExamsScheduleConstants.Exams;
    }
}