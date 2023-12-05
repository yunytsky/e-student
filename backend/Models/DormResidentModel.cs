using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace E_Student.Models;

public class DormResidentModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string ID { get; set; }

    [BsonElement("fullName")]
    public string FullName { get; set; }

    [BsonElement("dormPassNumber")]
    public string DormPassNumber { get; set; }

    [BsonElement("dormAddress")]
    public string DormAddress { get; set; }

    [BsonElement("dormRoom")]
    public string DormRoom { get; set; }

    [BsonElement("dormAccount")]
    public string DormAccount { get; set; }
    
    [BsonElement("dormAccountBalance")]
    public string DormAccountBalance { get; set; }
    
    [BsonElement("dormAccountTransactions")]
    public List<AccountTransactionsModel> DormAccountTransactions { get; set; }
    [BsonElement("dormPassIssued")]
    public DateTime DormPassIssued { get; set; }
    [BsonElement("dormPassExpires")]
    public DateTime DormPassExpires { get; set; }
}