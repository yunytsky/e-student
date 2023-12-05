namespace E_Student.Models;

public class StudentConstants
{
    public static List<StudentModel> Students = new List<StudentModel>()
    {
        new StudentModel() {Number = "AA 11111111", FullName = "Петро Порох", Faculty = "FCSC", Course = "2", Group = "K25"},
        new StudentModel() {Number = "BB 22222222", FullName = "Not John Doe", Faculty = "FCSC", Course = "2", Group = "K25"},
        new StudentModel() {Number = "CC 33333333", FullName = "Third Real Name", Faculty = "FCSC", Course = "2", Group = "K25"},
        new StudentModel() {Number = "DD 44444444", FullName = "Ryan Gosling", Faculty = "FCSC", Course = "2", Group = "K25"},
        new StudentModel() {Number = "EE 55555555", FullName = "Hans Zimmerman", Faculty = "FCSC", Course = "2", Group = "K25"}
    };
}