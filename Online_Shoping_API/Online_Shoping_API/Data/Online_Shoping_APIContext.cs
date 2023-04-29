using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Models;

namespace Online_Shoping_API.Data
{
    public class Online_Shoping_APIContext : DbContext
    {
        public Online_Shoping_APIContext (DbContextOptions<Online_Shoping_APIContext> options)
            : base(options)
        {
        }

        public DbSet<Online_Shoping_API.Models.UserModel> TB_User { get; set; } = default!;
        public DbSet<Online_Shoping_API.Models.StoreItem> TB_StoreItem { get; set; } = default!;
        public DbSet<Online_Shoping_API.Models.OrderModel> TB_Order { get; set; } = default!;
        public DbSet<Online_Shoping_API.Models.DeviceInformation>? TB_Device_Information { get; set; }



    }
}
