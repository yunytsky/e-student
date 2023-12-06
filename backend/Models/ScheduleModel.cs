using System.Text.Json.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace E_Student.Models;

public class ScheduleModel
{
    [JsonIgnore]
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    
    [BsonElement("group")]
    public string group { get; set; }

    [BsonElement("days")]
    public List<List<List<string>>> days { get; set; }
}