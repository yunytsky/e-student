namespace E_Student.Models;

public class StudentModel
{
    public string Number { get; set; }
    public string FullName { get; set; }
    public string Faculty { get; set; }
    public string Group { get; set; }
    public string Course { get; set; }

    public StudentModel()
    {
        Number = "OO 00000000";
        FullName = "Default Full Name John Doe";
        Faculty = "FCSC";
    }

    public StudentModel(string number, string faculty) : this()
    {
        Number = number;
        Faculty = faculty;
    }
    
    public StudentModel(string number, string faculty, string name) : this(number, faculty)
    {
        FullName = name;
    }

    public string GetFullInfo()
    {
        return $"Студентський квиток: {Number}\n" +
               $"ПІБ: {FullName}\n" +
               $"Факультет: {Faculty}\n" +
               $"Група: {Group}\n" +
               $"Курс: {Course}";
    }
}