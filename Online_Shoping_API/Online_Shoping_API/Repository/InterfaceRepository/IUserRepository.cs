using Online_Shoping_API.Models;

namespace Online_Shoping_API.Repository.InterfaceRepository
{
    public interface IUserRepository
    {
        List<UserModel> GetUsers();
        UserModel GetUserByEmail(string email);
        string UpdateUserStatus(string email);
        void AddUser(UserModel userModel);
        void DeleteUser(int id);
        bool UserExists(int id);
    }
}
