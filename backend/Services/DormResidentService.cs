using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class DormResidentService
    {
        private readonly IMongoCollection<DormResidentModel> _dormResident;

        public DormResidentService(IOptions<DormResidentSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _dormResident = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<DormResidentModel>(options.Value.CollectionName);
        }

        public  Task<List<DormResidentModel>> GetAll() =>
             _dormResident.Find(_ => true).ToListAsync();
        

        public async Task<DormResidentModel> Get(string number) =>
            await _dormResident.Find(s => s.DormPassNumber == number).FirstOrDefaultAsync();

        public async Task Create(DormResidentModel dormResident) =>
            await _dormResident.InsertOneAsync(dormResident);
        

        public async Task Update(string id, DormResidentModel dormResident) =>
            await _dormResident.ReplaceOneAsync(s => s.DormPassNumber == id, dormResident);

        public async Task Delete(string id) =>
            await _dormResident.DeleteOneAsync(s => s.DormPassNumber == id);
    }
}
