﻿namespace E_Student.Models;

public class DormResidentInfo
{
    public string fullName { get; }
    public string passNumber { get; }
    public string dormAddress { get; }
    public string room { get; }
    public string account { get; }
    public string balance { get; }
    public List<AccountTransactionsModel> accountTransactions { get; }
    public DateTime issued { get; }
    public DateTime expires { get; }
    public string dormNumber { get; }

    public DormResidentInfo(DormResidentModel dormResidentModel)
    {
        passNumber = dormResidentModel.DormPassNumber;
        fullName = dormResidentModel.FullName;
        dormAddress = dormResidentModel.DormAddress;
        room = dormResidentModel.DormRoom;
        account = dormResidentModel.DormAccount;
        balance = dormResidentModel.DormAccountBalance;
        accountTransactions = dormResidentModel.DormAccountTransactions;
        issued = dormResidentModel.DormPassIssued;
        expires = dormResidentModel.DormPassExpires;
        dormNumber = dormResidentModel.DormNumber;
    }
}