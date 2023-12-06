using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class ScheduleService
    {
        private readonly IMongoCollection<ScheduleModel> _schedules;

        public ScheduleService(IOptions<ScheduleSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _schedules = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<ScheduleModel>(options.Value.CollectionName);
        }

        public  Task<List<ScheduleModel>> GetAll() =>
            _schedules.Find(_ => true).ToListAsync();
    }
}
