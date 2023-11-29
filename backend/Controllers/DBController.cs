using System.Security.Claims;
using E_Student.Models;

namespace E_Student.Controllers;

public class DBController
{
    private DBController() { }
    
    private static DBController _instance;
    
    private static readonly object _lock = new object();
    
    public static DBController GetInstance()
    {
        if (_instance == null)
            lock (_lock)
                if (_instance == null)
                    _instance = new DBController();
        return _instance;
    }
    
    public UserModel GetUser(string number)
    {
        var currentUser = UserConstants.Users.FirstOrDefault(o => o.StudentNumber == number);
        
        if (currentUser != null)
        {
            return currentUser;
        }

        return null;
    }
    public StudentModel GetStudent(string number)
    {
        var currentStudent = StudentConstants.Students.FirstOrDefault(o => o.Number == number);

        if (currentStudent != null)
        {
            return currentStudent;
        }

        return null;
    }
    public DormResidentModel GetDormResident(string name)
    {
        var currentDormResident = DormResidentConstants.DormResidents.FirstOrDefault(o => o.FullName == name);
        
        if (currentDormResident != null)
        {
            return currentDormResident;
        }

        return null;
    }
}