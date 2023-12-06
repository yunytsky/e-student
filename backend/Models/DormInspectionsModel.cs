using System.Text.Json.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace E_Student.Models;

public class DormInspectionsModel
{
    [JsonIgnore]
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string ID { get; set; }
    
    [BsonElement("date")]
    public DateTime date { get; set; }
}