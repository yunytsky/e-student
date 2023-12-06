using E_Student.Models;
using E_Student.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace E_Student.Services
{
    public class ExamsScheduleService
    {
        private readonly IMongoCollection<ExamsScheduleModel> _exams;

        public ExamsScheduleService(IOptions<ExamsScheduleSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _exams = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<ExamsScheduleModel>(options.Value.CollectionName);
        }

        public  Task<List<ExamsScheduleModel>> GetAll() =>
            _exams.Find(_ => true).ToListAsync();
    }
}
