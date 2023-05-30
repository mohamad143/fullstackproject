using Online_Shoping_API.Models;

namespace Online_Shoping_API.Repository.InterfaceRepository
{
    public interface IUserRepository
    {

        UserModel GetUserById(int userId);
        List<UserModel> GetUsers();
        UserModel GetUserByEmail(string email);
        void CreateUser(UserModel user);
        void UpdateUser(UserModel user);
        void DeleteUser(int userId);
    }
}
