using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;



namespace Online_Shoping_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserModelsController : ControllerBase
    {
        private readonly Online_Shoping_APIContext _context;



        public UserModelsController(Online_Shoping_APIContext context)
        {
            _context = context;



        }

        // GET: api/UserModels
        [HttpGet]
        public  List<UserModel> GetUsers()

        {   
            var res =  _context.TB_User.ToList();
            return res;
           
           
           
        }

        // GET: api/UserModels/5
        [HttpGet("{email}")]
        public  UserModel GetUserModel(string email)

        {
            
            var user = _context.TB_User.Where(x => x.User_Email == email).FirstOrDefault();
            if(user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
           
        }
    

        // PUT: api/UserModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{email}")]
        public  string PutUserModel(string email)
        {
            var user = _context.TB_User.Where(x => x.User_Email == email).FirstOrDefault();
            if (user != null)
            {

                if (user.User_Status == "false")
                {
                    user.User_Status = "true";
                    var newuser = (UserModel)user;
                    _context.Update(newuser).State = EntityState.Modified;
                }
                else if (user.User_Status != "false")
                {
                    user.User_Status = "false";
                    var newuser = (UserModel)user;
                    _context.Update(newuser).State = EntityState.Modified;

                }
                
                _context.SaveChanges();


                return "done(:";
            }
            else
            {
                return "user not found";
            }

         
            

            
        }

        // POST: api/UserModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        public string PostUserModel(UserModel userModel)

        {
            var user = _context.TB_User.Where(x => x.User_Email == userModel.User_Email).FirstOrDefault();
           
            if (user != null)

            {
                return "user available";
            }
            else if(user==null)
            {
                _context.TB_User.Add(userModel);
                _context.SaveChanges();
                return "welcome";

            }
            return "good";
               
            
        }

        // DELETE: api/UserModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserModel(int id)
        {
            var userModel = await _context.TB_User.FindAsync(id);
            if (userModel == null)
            {
                return NotFound();
            }

            _context.TB_User.Remove(userModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserModelExists(int id)
        {
            return _context.TB_User.Any(e => e.ID == id);
        }
    }
}
