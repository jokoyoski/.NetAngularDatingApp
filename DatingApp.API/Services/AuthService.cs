using System.Threading.Tasks;
using DatingApp.API.Interface;
using DatingApp.API.Model;

namespace DatingApp.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository authRepository;
        public AuthService(IAuthRepository authRepository)
        {
            this.authRepository=authRepository;
        }
        public bool IsUserExist(string UserName)
        {
            return this.authRepository.IsUserExist(UserName);
        }

        public User LoginUser(string user, string Password)
        {
           return this.authRepository.LoginUser(user,Password);
        }

        public async Task<User> RegisterUser(User user, string Password)
        {
            return await this.authRepository.RegisterUser(user,Password);
        }

        
    }
}