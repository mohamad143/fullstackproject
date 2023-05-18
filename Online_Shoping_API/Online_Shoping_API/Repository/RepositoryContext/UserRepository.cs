using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Repository.RepositoryContext
{
    public class UserRepository : IUserRepository
    {
        private readonly Online_Shoping_APIContext _context;

        public UserRepository(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        public List<UserModel> GetUsers()
        {
            return _context.TB_User.ToList();
        }

        public UserModel GetUserByEmail(string email)
        {
            return _context.TB_User.FirstOrDefault(x => x.User_Email == email);
        }

        public string UpdateUserStatus(string email)
        {
            var user = _context.TB_User.FirstOrDefault(x => x.User_Email == email);
            if (user != null)
            {
                user.User_Status = user.User_Status == "false" ? "true" : "false";
                _context.SaveChanges();
                return "done";
            }
            return "user not found";

        }

        public void AddUser(UserModel userModel)
        {
            _context.TB_User.Add(userModel);
            _context.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            var userModel = _context.TB_User.Find(id);
            if (userModel != null)
            {
                _context.TB_User.Remove(userModel);
                _context.SaveChanges();
            }
        }

        public bool UserExists(int id)
        {
            return _context.TB_User.Any(e => e.ID == id);
        }
    }
}
