namespace E_Student.Models;

public class AccountTransactionsModel
{
    public DateTime date { get; set; }
    public string amount { get; set; }
    public string remains { get; set; }
    public AccountTransactionsModel() { }
}