using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class StudentService
    {
        private readonly IMongoCollection<StudentModel> _students;

        public StudentService(IOptions<StudentsDatabaseSetings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _students = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<StudentModel>(options.Value.CollectionName);
        }

        public async Task<List<StudentModel>> GetAll() =>
              await _students.Find(_ => true).ToListAsync();
        

        public async Task<StudentModel> Get(string number) =>
            await _students.Find(s => s.Number == number).FirstOrDefaultAsync();

        public async Task Create(StudentModel student) =>
            await _students.InsertOneAsync(student);
        

        public async Task Update(string id, StudentModel student) =>
            await _students.ReplaceOneAsync(s => s.Number == id, student);

        public async Task Delete(string id) =>
            await _students.DeleteOneAsync(s => s.Number == id);
    }
}
