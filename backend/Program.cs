using System.Text;
using E_Student.Services;
using E_Student.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<StudentsDatabaseSetings>(builder.Configuration.GetSection("StudentDataBase"));
builder.Services.AddSingleton<StudentService>();

builder.Services.Configure<UserDatabaseSettings>(builder.Configuration.GetSection("UserDataBase"));
builder.Services.AddSingleton<UserService>();

builder.Services.Configure<DormResidentSettings>(builder.Configuration.GetSection("DormResidentDataBase"));
builder.Services.AddSingleton<DormResidentService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();;
        });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true, 
            ValidateIssuerSigningKey = true, 
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
        };
    });

builder.Services.AddRazorPages();
builder.Services.AddMvc();
builder.Services.AddControllers();



var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapRazorPages();
    endpoints.MapControllers();
});

app.Run();