using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Online_Shoping_API.Data;
var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<Online_Shoping_APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Online_Shoping_APIContext") ?? throw new InvalidOperationException("Connection string 'Online_Shoping_APIContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowAllPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
