using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace E_Student.Models;

public class UserModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("studentNumber")]
    public string StudentNumber { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("password")]
    public string Password { get; set; }

    [BsonElement("isDormResident")]
    public bool IsDormResident  { get; set; }
}