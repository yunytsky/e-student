namespace E_Student.Models;

public class DormResidentModel
{
    public string FullName { get; set; }
    public string DormPassNumber { get; set; }
    public string DormAddress { get; set; }
    public string DormRoom { get; set; }
    public string DormAccount { get; set; }
    
    public string GetFullInfo()
    {
        return $"Номер перепустки: {DormPassNumber}\n" +
               $"ПІБ: {FullName}\n" +
               $"Кімната: {DormRoom}\n" +
               $"Адреса гуртожитку: {DormAddress}\n" +
               $"Рахунок мешканця: {DormAccount}";
    }
}