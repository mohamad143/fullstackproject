using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Online_Shoping_API.Models
{
   
    public class UserModel
    {


        
        public int ID { get; set; }
        public string? User_Name { get; set; }
        public string? User_Email { get; set; }
        public string? User_Pass { get; set; }
        public string? User_Status { get; set; }
        public string? User_Rank { get; set; }
       
       

    }
}
