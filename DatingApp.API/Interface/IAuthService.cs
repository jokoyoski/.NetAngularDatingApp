using System.Threading.Tasks;
using DatingApp.API.Model;

namespace DatingApp.API.Services
{
    public interface IAuthService
    {
         Task<User> RegisterUser(User user,string Password);

         User LoginUser(string user,string Password);

          bool IsUserExist (string UserName);

    }
}