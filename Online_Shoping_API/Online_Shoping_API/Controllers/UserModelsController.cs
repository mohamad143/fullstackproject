using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserModelsController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserModelsController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public List<UserModel> GetUsers()
        {
            return _userRepository.GetUsers();
        }

        [HttpGet("{email}")]
        public UserModel GetUserModel(string email)
        {
            return _userRepository.GetUserByEmail(email);
        }

        [HttpPut("{email}")]
        public string PutUserModel(string email)
        {

            return _userRepository.UpdateUserStatus(email); ;
        }

        [HttpPost]
        public string PostUserModel(UserModel userModel)
        {
            var existingUser = _userRepository.GetUserByEmail(userModel.User_Email);
            if (existingUser != null)
            {
                return "user available";
            }

            _userRepository.AddUser(userModel);
            return "welcome";
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserModel(int id)
        {
            if (!_userRepository.UserExists(id))
            {
                return NotFound();
            }

            _userRepository.DeleteUser(id);
            return NoContent();
        }
    }
}
