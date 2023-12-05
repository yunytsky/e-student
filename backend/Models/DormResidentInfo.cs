namespace E_Student.Models;

public class DormResidentInfo
{
    public string fullName { get; }
    public string passNumber { get; }
    public string dormAddress { get; }
    public string room { get; }
    public string account { get; }

    public DormResidentInfo(DormResidentModel dormResidentModel)
    {
        passNumber = dormResidentModel.DormPassNumber;
        fullName = dormResidentModel.FullName;
        dormAddress = dormResidentModel.DormAddress;
        room = dormResidentModel.DormRoom;
        account = dormResidentModel.DormAccount;
    }
}