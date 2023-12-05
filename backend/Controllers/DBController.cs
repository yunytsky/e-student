﻿using System.Security.Claims;
using E_Student.Models;
using E_Student.Services;
using E_Student.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace E_Student.Controllers;


public class DBController : Controller
{
    private DBController() { }

    private static StudentController _studentService;
    private static UserDatabaseController _userService;
    private static DormResidentController _dormResidentController;

    private static DBController _instance;
    
    private static readonly object _lock = new object();
    
    public static DBController GetInstance()
    {
        var connectionString_student = "mongodb+srv://chalchinskiy:PxSWjNdCITRmMlSi@cluster0.0ckqst8.mongodb.net/";
        var databaseName_student = "Student";
        var collectionName_student = "E-Student";

        var connectionString_user = "mongodb+srv://chalchinskiy:PxSWjNdCITRmMlSi@cluster0.0ckqst8.mongodb.net/";
        var databaseName_user = "User";
        var collectionName_user = "User";

        var connectionString_dorm = "mongodb+srv://chalchinskiy:PxSWjNdCITRmMlSi@cluster0.0ckqst8.mongodb.net/";
        var databaseName_dorm = "DormResidents";
        var collectionName_dorm = "DormResidents";

        var studentsDatabaseSettings = Options.Create(new StudentsDatabaseSetings
        {
            ConnectionString = connectionString_student,
            DatabaseName = databaseName_student,
            CollectionName = collectionName_student
        });
        var usersDatabaseSettings = Options.Create(new UserDatabaseSettings
        {
            ConnectionString = connectionString_user,
            DatabaseName = databaseName_user,
            CollectionName = collectionName_user
        });
        var DormResidentDatabaseSettings = Options.Create(new DormResidentSettings
        {
            ConnectionString = connectionString_dorm,
            DatabaseName = databaseName_dorm,
            CollectionName = collectionName_dorm
        });
        if (_instance == null)
            lock (_lock)
                if (_instance == null)
                {
                    _instance = new DBController();
                    _studentService = new StudentController(new StudentService(studentsDatabaseSettings));    
                    _userService = new UserDatabaseController(new UserService(usersDatabaseSettings));
                    _dormResidentController = new DormResidentController(new DormResidentService(DormResidentDatabaseSettings));
                }

        return _instance;
    }

   

    public void AddNewUser(UserModel newUser)
    {
        UserConstants.Users.Add(newUser);
        _userService.Add(newUser);
        
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