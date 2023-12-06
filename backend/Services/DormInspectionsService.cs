using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class DormInspectionsService
    {
        private readonly IMongoCollection<DormInspectionsModel> _dormInspections;

        public DormInspectionsService(IOptions<DormInspectionsSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _dormInspections = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<DormInspectionsModel>(options.Value.CollectionName);
        }

        public  Task<List<DormInspectionsModel>> GetAll() =>
            _dormInspections.Find(_ => true).ToListAsync();
    }
}
