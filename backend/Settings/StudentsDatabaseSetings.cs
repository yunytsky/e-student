namespace E_Student.Settings
{
    public class StudentsDatabaseSetings
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string CollectionName { get; set; } = "E-Students";
    }
}
