using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Model;
using DatingApp.API.Queries;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.DTOS;
using System;
using DatingApp.API.Helper;

namespace DatingApp.API.Interface
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext dataContext;

        public DatingRepository(DataContext dataContext)
        {
       this.dataContext=dataContext;
        }
        public void Add<T>(T entity) where T : class
        {
           this.dataContext.Add(entity);
        }

        public async Task<bool> CheckforMain(int userId, int PhotoId)
        {
           var isMain= await this.dataContext.Photos.FirstOrDefaultAsync(x=>x.UserId==userId && x.Id==PhotoId);
           if(isMain.IsMain==true)
           {
            return true;
           }
           return false;
        }

        public void Delete<T>(T entity) where T : class
        {
             this.dataContext.Remove(entity);
        }

        public string DeletePhotoById(int photoId)
        {
          var result=string.Empty;
           try{
      var photoInfo=   this.dataContext.Photos.SingleOrDefault(x=>x.Id==photoId);
      this.dataContext.Photos.Remove(photoInfo);
           this.dataContext.SaveChanges();
           
           } catch (Exception e)
            {
                result = string.Format("DeletePhotoById - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }

            //registrationId = newRecord.RegistrationId;
            return result; ;
        }

        public IQueryable<UserLike> GetLikers(int id)
        {
            var userLikes=DatingQuery.GetLikers(id,dataContext);
            return userLikes;
        }

        public Photo GetMainPhoto(int photoId)
        {
            var photo=DatingQuery.GetPhotoMainById(photoId,dataContext);
            if(photo==null)
            {
                return new Photo();
            }
            return photo;
        }

        public async Task<Message> GetMessage(int id)
        {
          return await dataContext.messages.FirstOrDefaultAsync(m=>m.Id==id);
        }

        public async Task<IQueryable<Message>> GetMessagesForUser()
        {
          var messageList= DatingQuery.GetMessageList(dataContext);
          return messageList;
          
        }
         public async Task<Message> GetThreadDetails(int userId,int recipientId)
        {
          var message= DatingQuery.GetThreadDetails(userId,recipientId,dataContext);
          return message;
          
        }
        public void DeleteMessage(int Id,int userId)
        {
            var getMessage=dataContext.messages.SingleOrDefault(x=>x.Id==Id);
         if(getMessage.SenderId==userId)
         {
             getMessage.SenderDeleted=true;
         }
         else{
             getMessage.ReceipientDeleted=true;
         }
         
         dataContext.SaveChanges();

        }


        public async Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId)
        {
          var messageList=  DatingQuery.GetMessageThread(dataContext,userId,recipientId);
          return messageList;
        }

        public async Task<Photo> Getphoto(int id)
        {
            var photo= await this.dataContext.Photos.FirstOrDefaultAsync(x=>x.Id==id);
            return photo;
        }

        public Photo GetPhotoById(int userId, int PhotoId)
        {
           var photo=DatingQuery.GetPhotoById(userId,PhotoId,dataContext);
            return photo;
        }

        public List<Photo> getPhotos(int UserId)
        {
            var photos=DatingQuery.GetPhotosById(UserId,dataContext).ToList();
            return photos;
        }

          public Like GetPreviousLike(Like like)
        {
            var likeInfo=DatingQuery.CheckForPreviousLike(like,dataContext);
            return likeInfo;
        }

        public User GetUser(int User)
        {
           
            var user=  DatingQuery.GetUserById(User,dataContext);
            return user;
        }

        public IQueryable<UserLike> GetUserLikes(int id)
        {
         var userLikes=DatingQuery.GetUserLikes(id,dataContext);
         return userLikes;
        }
       
        public  IQueryable<User> GetUsers(UserParams user)
        {
            
            var users=DatingQuery.GetAllUsers( user,dataContext);
        if(user.OrderBy=="lastactive")
        {
          users=users.OrderByDescending(u=>u.LastActive);
        }else
        {
          users=users.OrderByDescending(u=>u.Created);
        }
            
            if(user.MinAge!=18 || user.MaxAge !=99)
            {
                var minDob=DateTime.Today.AddYears(-user.MaxAge-1);
                var maxDob=DateTime.Today.AddYears(-user.MinAge-1);
                 
                    var userList=users.Where(j=>j.DateofBirth>=minDob && j.DateofBirth<=maxDob);

                    
                  
                return userList;
            }
             
            return users;
        }

        public async Task<string> LikeUser(Like like)
        {
            var result=string.Empty;
           try{
         this.dataContext.Likes.Add(like);
           this.dataContext.SaveChanges();
           
           } catch (Exception e)
            {
                result = string.Format("LikeUser - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }

            //registrationId = newRecord.RegistrationId;
            return result; ;
        }

        public async  Task<bool> SaveAll()
        {
            return await this.dataContext.SaveChangesAsync()>0;
        }

        public string SaveMessage(Message message)
        {
           var result=string.Empty;
           try{
         this.dataContext.messages.Add(message);
           this.dataContext.SaveChanges();
           
           } catch (Exception e)
            {
                result = string.Format("Update User - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }
            //registrationId = newRecord.RegistrationId;
            return result; ;
        }

        public string SavePicture(Photo Photo,out int Id)
       { var result=string.Empty;
           try{
         this.dataContext.Photos.Add(Photo);
           this.dataContext.SaveChanges();
           
           } catch (Exception e)
            {
                result = string.Format("Update User - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }
Id= Photo.Id;
            //registrationId = newRecord.RegistrationId;
            return result; ;
          
       }

        public async Task<string> UpdatePhoto(int userId, int PhotoId)
        {
           
            var result = string.Empty;
           
            try
            {
                
                 
            var userData= this.dataContext.Photos.SingleOrDefault(x=>x.UserId==userId && x.IsMain==true);
             
            if(userData==null)
            {
                 var userDatas= this.dataContext.Photos.Where(x=>x.UserId==userId);

                  foreach(var j in userDatas)
                  {
                      if(j.Id==PhotoId)
                      {
                          j.IsMain=true;
                      }
                  }
            }else{
  userData.IsMain=false;
 var updateMain=this.dataContext.Photos.SingleOrDefault(x=>x.Id==PhotoId);
 updateMain.IsMain=true;
            }

             this.dataContext.SaveChanges();
            }
            catch (Exception e)
            {
                result = string.Format("Update Photo - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }

            //registrationId = newRecord.RegistrationId;
            return result; ;
        }

        public string UpdateUser(UserForUpdateDTO user,int id)
      {
             if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            var result = string.Empty;
           
            try
            {
                
                 
            var userData= this.dataContext.Users.FirstOrDefault(x=>x.id==id);
               userData.Interests=user.Interests;
               userData.Country=user.Country;
               userData.Introduction=user.Introduction;
               userData.LookingFor=user.LookingFor;
               

               userData.City=user.City;
               this.dataContext.SaveChanges();
            }
            catch (Exception e)
            {
                result = string.Format("Update User - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }

            //registrationId = newRecord.RegistrationId;
            return result; ;
      }

       // ublic async  Task<IEnumerable<User>> GetUsers()
      //  {
      ///      var users=await this.dataContext.Users.ToListAsync();
       //     return users;
       // }
    }
}