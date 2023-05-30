using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Repository.RepositoryContext
{
    public class UserRepository : IUserRepository
    {
        private readonly Online_Shoping_APIContext _dbContext;

        public UserRepository(Online_Shoping_APIContext context)
        {
            _dbContext = context;
        }

        public UserModel GetUserById(int userId)
        {
            return _dbContext.TB_User.Find(userId);
        }
        public List<UserModel> GetUsers()
        {
            return _dbContext?.TB_User.ToList();
        }

        public UserModel GetUserByEmail(string email)
        {
            return _dbContext.TB_User.FirstOrDefault(u => u.Email == email);
        }

        public void CreateUser(UserModel user)
        {
            _dbContext.TB_User.Add(user);
            _dbContext.SaveChanges();
        }

        public void UpdateUser(UserModel user)
        {
            _dbContext.TB_User.Update(user);
            _dbContext.SaveChanges();
        }

        public void DeleteUser(int userId)
        {
            var user = _dbContext.TB_User.Find(userId);
            if (user != null)
            {
                _dbContext.TB_User.Remove(user);
                _dbContext.SaveChanges();
            }
        }
    }
}
