using System.Text.Json.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace E_Student.Models;

public class ExamsScheduleModel
{
    [JsonIgnore]
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    
    [BsonElement("group")]
    public string group { get; set; }

    [BsonElement("exams")]
    public List<ExamModel> exams { get; set; }
}