using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Online_Shoping_API.Data;
using Online_Shoping_API.Repository.InterfaceRepository;
using Online_Shoping_API.Repository.RepositoryContext;
using Online_Shoping_API.Repository.RepositoryControllers.Online_Shoping_API.Repositories;


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
            policy
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
                
        });
});
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IStoreItemRepository, StoreItemRepository>();
builder.Services.AddScoped<IDeviceInformationRepository, DeviceInformationRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowAllPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
