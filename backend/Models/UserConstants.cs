namespace E_Student.Models;

public class UserConstants
{
    public static List<UserModel> Users = new List<UserModel>()
    {
        new UserModel(){Username = "User1", Password = "password1", StudentNumber = "AA 11111111", Email = "email1@email"},
        new UserModel(){Username = "User2", Password = "password2", StudentNumber = "BB 22222222", Email = "email2@email"},
        new UserModel(){Username = "User3", Password = "password3", StudentNumber = "CC 33333333", Email = "email3@email"}
    };
}