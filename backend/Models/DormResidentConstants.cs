namespace E_Student.Models;

public class DormResidentConstants
{
    public static List<DormResidentModel> DormResidents = new List<DormResidentModel>()
    {
        new DormResidentModel(){FullName = "Петро Порох", DormAddress = "Сєчєнова, 6", 
            DormAccount = "11111111", DormPassNumber = "123456", DormRoom = "101/2"},
        new DormResidentModel(){FullName = "Third Real Name", DormAddress = "Сєчєнова, 6", 
            DormAccount = "33333333", DormPassNumber = "345678", DormRoom = "103/2"},
        new DormResidentModel(){FullName = "Ryan Gosling", DormAddress = "Сєчєнова, 6", 
            DormAccount = "00000000", DormPassNumber = "000000", DormRoom = "100/1"}
    };
}