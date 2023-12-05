using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class UserService
    {
        private readonly IMongoCollection<UserModel> _user;

        public UserService(IOptions<UserDatabaseSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _user = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<UserModel>(options.Value.CollectionName);           
        }
        
        public async Task<List<UserModel>> GetAll() =>
            await _user.Find(_ => true).ToListAsync();

        public async Task<UserModel> Get(string number) =>
            await _user.Find(s => s.StudentNumber == number).FirstOrDefaultAsync();

        public async Task Create(UserModel student) =>
            await _user.InsertOneAsync(student);
    }
}
