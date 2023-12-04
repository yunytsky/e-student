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

    [BsonElement("dormAdress")]
    public string DormAddress { get; set; }

    [BsonElement("dormRoom")]
    public string DormRoom { get; set; }

    [BsonElement("dormAccount")]
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