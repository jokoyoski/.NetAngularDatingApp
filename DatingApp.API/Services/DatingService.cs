using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Interface;
using DatingApp.API.Model;
using System.Linq;
using DatingApp.API.DTOS;
using DatingApp.API.Helper;

namespace DatingApp.API.Services
{
    public class DatingService : IDatingService
    {
        private readonly IUserFactory userFactory;
                private readonly IDatingRepository datingRepository;
         public DatingService( IDatingRepository datingRepository,IUserFactory userFactory)
         {
             this.datingRepository=datingRepository;
             this.userFactory=userFactory;
         }
        public async Task< PagedList<User>> GetAllUsers(UserParams user )
        {
          
            var users=  datingRepository.GetUsers(user);
       
               return await  PagedList<User>.CreateAsync(users,user.PageNumber,user.PageSize);
        }
           public string UpdateUser(UserForUpdateDTO user,int Id)
           {
               return this.datingRepository.UpdateUser(user,Id);
           }
        public UserView GetUserById(int UserId)
        {
           var user= datingRepository.GetUser(UserId);
           var photos=datingRepository.getPhotos(UserId);
           var getMainPhoto=datingRepository.GetMainPhoto(UserId);
           return this.userFactory.GetUserById(user,photos,getMainPhoto.URl);
        }
         
  public async Task<Message> GetThreadDetails(int userId,int recipientId)
        {
       var message= await  this.datingRepository.GetThreadDetails(userId,recipientId);
          return message;
          
        }
           public void SavePicture(Photo Photo,out int photoId)
       {
           
           this.datingRepository.SavePicture(Photo,out int Id);
            photoId=Id;
       }

        public async Task<Photo> Getphoto(int id)
        {
           return await this.datingRepository.Getphoto(id);
        }
        
        public async Task< string> UpdatePhoto(int userid, int PhotoId)
        {
            
            
           return await this.datingRepository.UpdatePhoto( userid,PhotoId);
        }

        public Task<bool> CheckForIsMain(int userId, int PhotoId)
        {
            return this.datingRepository.CheckforMain(userId,PhotoId);
        }

        public Photo GetPhotoById(int userId, int photoId)
        {
           return this.datingRepository.GetPhotoById(userId,photoId);
        }

        public string DeletePhotoById(int photoId)
        {
          return this.datingRepository.DeletePhotoById(photoId);
        }

        public async Task<string> LikeUser(Like like)
        {
           return await this.datingRepository.LikeUser(like);
        }

        public Like GetPreviousLike(Like like)
        {
           return this.datingRepository.GetPreviousLike(like);
        }
     
        public async Task<PagedList<UserLike>> GetUserLikes(UserLikesParams user,int id)
        {
           var users=this.datingRepository.GetUserLikes(id);
            return await  PagedList<UserLike>.CreateAsync(users,user.PageNumber,user.PageSize);
        }

        public async Task<PagedList<UserLike>> GetLikers(UserLikesParams user,int id)
        {
          var users=this.datingRepository.GetLikers(id);
            return await  PagedList<UserLike>.CreateAsync(users,user.PageNumber,user.PageSize);
        }

        public async Task<Message> GetMessage(int id)
        {
           return await this.datingRepository.GetMessage(id);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams message)
        {
        
          var messageList= await this.datingRepository.GetMessagesForUser();
          switch (message.MessageContainer)
          {
              case "Inbox":
            messageList=  messageList.Where(x=>x.RecipientId==message.UserId&&x.ReceipientDeleted==false);
            break;
            
              case "Outbox":
            messageList=  messageList.Where(x=>x.SenderId==message.UserId&&x.SenderDeleted==false);
            break;
             default:
            messageList=  messageList.Where(x=>x.RecipientId==message.UserId && x.IsRead==false&&x.ReceipientDeleted==false);
            break;
          }
          messageList=messageList.OrderByDescending(x=>x.MessageSent);
          return await PagedList<Message>.CreateAsync(messageList,message.PageNumber,message.PageSize);
          
        }

        public async Task<IEnumerable<Message>> GetMessgageThread(int userId, int recipientId)
        {
              var messageList= await this.datingRepository.GetMessageThread(userId,recipientId);

            
           return messageList;

        }

       

        public string SaveMessage(Message message)
        {
          return this.datingRepository.SaveMessage(message);
        }

        public void DeleteMessage(int messageId,int userId)
        {
             this.datingRepository.DeleteMessage(messageId,userId);
        }
    }
}