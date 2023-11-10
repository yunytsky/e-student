namespace E_Student.Models;

public class StudentConstants
{
    public static List<StudentModel> Students = new List<StudentModel>()
    {
        new StudentModel("AA 11111111", "FCSC"),
        new StudentModel("BB 22222222", "FCSC", "Not John Doe", "222222", "16", "222/2"),
        new StudentModel("CC 33333333", "FCSC"),
        new StudentModel("DD 44444444", "FCSC"),
        new StudentModel("EE 55555555", "FCSC") 
    };
}