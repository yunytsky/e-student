using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Text;
using System.Text.Json.Serialization;

namespace E_Student.Models;


public class StudentModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    [BsonElement("number")]
    public string Number { get; set; }

    [BsonElement("fullName")]
    public string FullName { get; set; }

    [BsonElement("faculty")]
    public string Faculty { get; set; }

    [BsonElement("group")]
    public string Group { get; set; }

    [BsonElement("course")]
    public string Course { get; set; }
}