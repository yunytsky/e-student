namespace E_Student.Models;

public class UserConstants
{
    public static List<UserModel> Users = new List<UserModel>()
    {
        new UserModel(){Password = "password1", StudentNumber = "AA 11111111"},
        new UserModel(){Password = "password2", StudentNumber = "BB 22222222"},
        new UserModel(){Password = "password3", StudentNumber = "CC 33333333"}
    };
}