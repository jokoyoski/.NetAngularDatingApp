using System.Threading.Tasks;
using DatingApp.API.Model;

namespace DatingApp.API.Interface
{
    public interface IAuthRepository
    {
         Task<User> RegisterUser(User user,string Password);

         User LoginUser(string user,string Password);

          bool IsUserExist (string UserName);
         

    }
}