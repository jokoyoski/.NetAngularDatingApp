using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.DTOS;
using DatingApp.API.Helper;
using DatingApp.API.Model;

namespace DatingApp.API.Interface
{
    public interface IDatingRepository
    {
void DeleteMessage(int Id,int userId);
 Task<Message> GetThreadDetails(int userId,int recipientId);
string SaveMessage(Message message);
      string UpdateUser(UserForUpdateDTO user,int id);
         void Add<T>(T entity) where T:class;
         void Delete<T> (T entity) where T:class;
         Task<bool> SaveAll();

         IQueryable<User> GetUsers(UserParams user);
       User GetUser(int User);
      
      List<Photo> getPhotos(int UserId);
       string SavePicture(Photo photo,out int Id);

       Task<Photo>Getphoto(int id);
       Like GetPreviousLike(Like like);
       Task<string>LikeUser(Like like);

       IQueryable<UserLike> GetLikers(int id);
     
       IQueryable<UserLike>GetUserLikes(int id);
       Task<bool> CheckforMain(int userId,int PhotoId);
       Task<string>UpdatePhoto(int userId,int PhotoId);
       Photo GetMainPhoto(int userId);
Photo GetPhotoById(int userId,int PhotoId);
string DeletePhotoById(int photoId);

Task<Message>GetMessage(int id);
Task<IQueryable<Message>> GetMessagesForUser();
Task<IEnumerable<Message>> GetMessageThread(int userId,int recipientId );


    }
}