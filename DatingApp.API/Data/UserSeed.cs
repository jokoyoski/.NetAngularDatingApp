using System.Collections.Generic;
using DatingApp.API.Model;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class UserSeed
    {
        private readonly DataContext _dataContext;

        public UserSeed(DataContext dataContext)
        {
        this._dataContext=dataContext;
        }

        public void SeedUsers()
        {
            var UserData=System.IO.File.ReadAllText("Data/UserSeedData.json");
           var users = JsonConvert.DeserializeObject<List<User>>(UserData);
           foreach(var user in users)
           {
             byte[] passwordHash, passwordSalt;
             CreatePasswordHash("password",out passwordSalt,out passwordHash);
             user.PasswordHash=passwordHash;
            
             user.UserName= user.UserName.ToLower();
             _dataContext.Users.Add(user);


           }
         _dataContext.SaveChanges();
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