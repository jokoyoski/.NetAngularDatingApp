using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Model;

namespace DatingApp.API.Interface
{
    public interface IUserFactory
    {
        UserView GetUserById(User user,List<Photo>Photo,string photo);


       
    }
}