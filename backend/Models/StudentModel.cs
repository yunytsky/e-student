namespace E_Student.Models;

public class StudentModel
{
    public string Number { get; }
    public string FullName { get; }
    public string Faculty { get; }
    //public string Email { get; set; }

    public string DormNumber { get; set; }
    public string DormPassNumber { get; set; }
    public string BlockNumber { get; set; }

    public StudentModel()
    {
        Number = "OO 00000000";
        FullName = "Default Full Name John Doe";
        Faculty = "FCSC";
        //Email = "default@email";
    }

    public StudentModel(string number, string faculty) : this()
    {
        Number = number;
        Faculty = faculty;
    }
    
    public StudentModel(string number, string faculty, string name, string dormPassNumber,
        string dormNumber, string blockNumber) : this(number, faculty)
    {
        FullName = name;
        DormPassNumber = dormPassNumber;
        DormNumber = dormNumber;
        BlockNumber = blockNumber;
    }
}