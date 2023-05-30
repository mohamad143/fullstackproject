using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Online_Shoping_API.Data;
using Online_Shoping_API.Helper;
using Online_Shoping_API.Repository.InterfaceRepository;
using Online_Shoping_API.Repository.RepositoryContext;
using Online_Shoping_API.Repository.RepositoryControllers.Online_Shoping_API.Repositories;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http.Extensions;




var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<Online_Shoping_APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Online_Shoping_APIContext") ?? throw new InvalidOperationException("Connection string 'Online_Shoping_APIContext' not found.")));

// Add services to the container.

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllPolicy",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();

        });
});
builder.Services.AddScoped<JwtService>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IStoreItemRepository, StoreItemRepository>();
builder.Services.AddScoped<IDeviceInformationRepository, DeviceInformationRepository>();




var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowAllPolicy");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapControllers();
app.Run();