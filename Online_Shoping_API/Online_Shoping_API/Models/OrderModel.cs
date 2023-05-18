using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
namespace Online_Shoping_API.Models
{
    public class OrderModel
    {
        public int ID { get; set; }
        public int User_ID { get; set; }
        public string? Order_Items { get; set; }
        public double? Order_Price { get; set; }
        public DateTime Order_Date { get; set; }
        public string? Order_Location { get; set; }
        public string? Order_Status { get; set; }
        public string? Order_Email { get; set; }

    }
}
