namespace E_Student.Models;

public class StudentInfo
{
    public string studentNumber { get; }
    public string fullName { get; }
    public string faculty { get; }
    public string group { get; }
    public string course { get; }

    public StudentInfo(StudentModel studentModel)
    {
        studentNumber = studentModel.Number;
        fullName = studentModel.FullName;
        faculty = studentModel.Faculty;
        group = studentModel.Group;
        course = studentModel.Course;
    }
}