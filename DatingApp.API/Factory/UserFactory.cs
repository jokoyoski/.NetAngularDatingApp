using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Model;

namespace DatingApp.API.Interface
{
    public class UserFactory:IUserFactory
    {
       public  UserView GetUserById(User user,List<Photo>Photo,string photo){


            var view=new UserView{
              LookingFor=user.LookingFor,
              id=user.id,
              UserName=user.UserName,
              Interests=user.Interests,
              Introduction=user.Introduction,
              Gender=user.Gender,
              DateOfBirth=user.DateofBirth,
              Created=user.Created,
              KnownAs=user.KnownAs,
              Photos=Photo,
              Age=5,
              PhotoUrl=photo,
              City=user.City,
              Country=user.Country
              
            };
            return view;
        }
     
    }
}