using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Model;
using System.Linq;
using System;
using System.Text;

namespace DatingApp.API.Interface
{ 
    
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext dataContext;

        public AuthRepository(DataContext dataContext)
        {
this.dataContext=dataContext;
        }
        public bool IsUserExist(string UserName)
        {
            if( dataContext.Users.Any(x=>x.UserName==UserName))
            return true;
            return false;
        }

        public  User LoginUser(string userName, string Password)
        {
            var user=  dataContext.Users.FirstOrDefault(x=>x.UserName==userName);
            if(user==null)
            return null;
            if(!VerifyPasswordHash(Password,user.PasswordHash,user.PasswordSalt)){
 return null;
            }
           
            return user;
        }

private bool VerifyPasswordHash(string password, byte[] passwordHash,byte[] passwordSalt)
{
                      using(var hmac= new System.Security.Cryptography.HMACSHA512(passwordSalt))
                          {
                             
                              var computedHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                              for(int i=0; i<computedHash.Length;i++){

                                  if(computedHash[i]!=passwordHash[i]) return false;
                              }
                          }
                          return true;
}          
             public async  Task<User> RegisterUser(User user, string password)
        {
            var result=string.Empty;
             byte [] passwordHash,passwordSalt;
            CreatePasswordHash(password,out passwordHash,out passwordSalt);
            
                   user.PasswordHash=passwordHash;
                      user.PasswordSalt=passwordSalt;
                      user.Password=null;
               

                       try{
              await  dataContext.Users.AddAsync(user);
                     await dataContext.SaveChangesAsync();

           
           } catch (Exception e)
            {
                result = string.Format("User - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }
                     return user;
            
        }

       
        private void CreatePasswordHash(string password,out byte[] passwordHash,out byte[] passwordSalt)
            {
                          using(var hmac= new System.Security.Cryptography.HMACSHA512())
                          {
                              passwordSalt=hmac.Key;
                              passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                          }
            }
    
      
    
    }     

                  
      
    
    }
