using MongoDB.Bson.Serialization.Attributes;

namespace E_Student.Models;

public class ExamModel
{
    [BsonElement("subject")]
    public string subject { get; set; }
    
    [BsonElement("control")]
    public string control { get; set; }
    
    [BsonElement("dateTime")]
    public DateTime dateTime { get; set; }
    
    [BsonElement("room")]
    public string room { get; set; }
}