using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.DTOS;
using DatingApp.API.Helper;
using DatingApp.API.Model;

namespace DatingApp.API.Services
{
    public interface IDatingService
    {
void DeleteMessage(int messageId,int userId);
      Task<Message> GetThreadDetails(int userId,int recipientId);
        string UpdateUser(UserForUpdateDTO user,int Id);
      //  IList<User> GetAllUsers();
    Task<Photo>Getphoto(int id);
      UserView GetUserById(int UserId);
      Task< PagedList<User>> GetAllUsers(UserParams user );

      Task<bool> CheckForIsMain(int userId,int PhotoId);

     Task <string> UpdatePhoto(int userid,int PhotoId);
      void SavePicture(Photo Photo, out int PhotoId);

      Task<PagedList<UserLike>> GetLikers(UserLikesParams user,int id);
      Task<PagedList<UserLike>> GetUserLikes(UserLikesParams user,int id);

      Photo GetPhotoById(int userId, int photoId);
       string DeletePhotoById(int photoId);
Like GetPreviousLike(Like like);
      Task< string >LikeUser(Like like);


      string SaveMessage(Message message);
Task<Message>GetMessage(int id);
Task<PagedList<Message>> GetMessagesForUser(MessageParams message);
Task<IEnumerable<Message>> GetMessgageThread(int userId, int recipientId);
    }
}