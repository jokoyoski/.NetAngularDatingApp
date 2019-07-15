using DatingApp.API.Data;
using DatingApp.API.Helper;
using DatingApp.API.Model;
using System.Collections.Generic;
using System.Linq;
namespace DatingApp.API.Queries
{
    public class DatingQuery
    { 
       private readonly DataContext dataContext;

      
        internal static IQueryable<User> GetAllUsers(UserParams user,DataContext dataContext)
        {
            var result=(from  b in dataContext.Users
            where user.UserId != b.Id
            where user.Gender==b.Gender
                join c in dataContext.Photos on b.Id equals c.UserId into userPhoto
                 from usero in userPhoto.DefaultIfEmpty()
                
              select  new User
              {
                  UserName=b.UserName,
              
                  Gender=b.Gender,
                  DateofBirth=b.DateofBirth,
                  KnownAs=b.KnownAs,
                  Introduction=b.Introduction,
                  LookingFor=b.LookingFor,
                  LastActive=b.LastActive,
                  Interests=b.Interests,
                  Country=b.Country,
                  Created=b.Created,
                  City=b.City,
                  Id=b.Id,
                  

              }
            
            ).OrderBy(x=>x.Id);
             return result;
        }
       

  internal static IEnumerable<Photo> GetPhotosById(int UserId,DataContext dataContext)
        {
            var result=(from  c in dataContext.Photos
            
           
                where c.UserId==UserId
                 
              select  new Photo
              {
                  Id=c.Id,
                 UserId=c.UserId,
                  URl=c.URl,
                  IsMain=c.IsMain
              }
            
            ).OrderBy(x=>x.Id);
             return result;
        }
       
       
 
       internal static Like CheckForPreviousLike(Like like,DataContext dataContext)
       {
         var result=(from b in dataContext.Likes
         where b.LikeeId==like.LikeeId && b.LikerId==like.LikerId

         select new Like{

           LikeeId=b.LikeeId,
           LikerId=b.LikeeId
         }
         ).FirstOrDefault();
         return result;
       }



          internal static IQueryable<UserLike> GetLikers(int id,DataContext dataContext)
       {
         var result=(from b in dataContext.Likes
         where b.LikeeId==id
         join  u in dataContext.Users on b.LikerId equals u.Id
         join s in dataContext.Photos on b.LikerId equals s.UserId into userPhotos
         from user in  userPhotos.DefaultIfEmpty()
where user.IsMain==true
         select new UserLike{
         
         Id=u.Id,
         KnownAs=u.KnownAs,
         City=u.City,
         PhotoUrl=user.URl

         }
         ).OrderBy(x=>x.Id);
         return result;
       }





          internal static IQueryable<UserLike> GetUserLikes(int id,DataContext dataContext)
       {
         var result=(from b in dataContext.Likes
         where b.LikerId==id
         join  u in dataContext.Users on b.LikeeId equals u.Id 
         join s in dataContext.Photos on b.LikeeId equals s.UserId into userPhoto
        
         from user in  userPhoto.DefaultIfEmpty()
 where user.IsMain==true
         select new UserLike{
         
         Id=u.Id,
         KnownAs=u.KnownAs,
         City=u.City,
         PhotoUrl=user.URl

         }
         ).OrderBy(x=>x.Id);
         return result;
       }
      



          internal static IEnumerable<Message> GetMessageThread(DataContext dataContext,int userId, int recipientId)
       {
         var result=(from b in dataContext.messages
         where  b.SenderId==userId && b.RecipientId==recipientId && b.SenderDeleted==false|| b.ReceipientDeleted==false&&  b.RecipientId==userId && b.SenderId==recipientId
    join c in dataContext.Users on b.RecipientId equals c.Id 
          join d in dataContext.Users on b.SenderId equals d.Id
          join e in dataContext.Photos on b.SenderId equals e.UserId into userPhoto
           from userPhotos in userPhoto.DefaultIfEmpty()
          where userPhotos.IsMain==true
          join f in dataContext.Photos on b.RecipientId equals f.UserId into recipientPhoto
           from recipientPhotos in recipientPhoto.DefaultIfEmpty()
           where recipientPhotos.IsMain==true
       
        
         select new Message{
         Id=b.Id,
         SenderId=b.SenderId,
         RecipientId=b.RecipientId,
         Content=b.Content,
         IsRead=b.IsRead,
        DateRead=b.DateRead,
        MessageSent=b.MessageSent,
        ReceipientDeleted=b.ReceipientDeleted,
        SenderDeleted=b.SenderDeleted,
        SenderName=d.UserName,
        RecipientName=c.UserName,
       RecipientPhoto=recipientPhotos.URl,
       SenderPhoto=userPhotos.URl
         }
         ).OrderBy(x=>x.MessageSent);
         return result;
       }
      
     internal static IQueryable<Message> GetMessageList(DataContext dataContext)
       {
         var result=(from b in dataContext.messages
         join c in dataContext.Users on b.RecipientId equals c.Id 
          join d in dataContext.Users on b.SenderId equals d.Id
          join e in dataContext.Photos on b.SenderId equals e.UserId into userPhoto
           from userPhotos in userPhoto.DefaultIfEmpty()
          where userPhotos.IsMain==true
          join f in dataContext.Photos on b.RecipientId equals f.UserId into recipientPhoto
           from recipientPhotos in recipientPhoto.DefaultIfEmpty()
           where recipientPhotos.IsMain==true
        
         select new Message{
         Id=b.Id,
         SenderId=b.SenderId,
         RecipientId=b.RecipientId,
         Content=b.Content,
         IsRead=b.IsRead,
        DateRead=b.DateRead,
        MessageSent=b.MessageSent,
        ReceipientDeleted=b.ReceipientDeleted,
        SenderDeleted=b.SenderDeleted,
        SenderName=d.UserName,
        RecipientName=c.UserName,
      SenderPhoto=userPhotos.URl,
      RecipientPhoto=recipientPhotos.URl,
     

         }
         ).OrderBy(x=>x.Id);
         return result;
       }
      
      internal static Message GetThreadDetails(int userId,int recipientId,DataContext dataContext)
      {
        var result=(from c in dataContext.Users
        join d in dataContext.Users on userId equals d.Id
        join e in dataContext.Users on recipientId equals e.Id
         join f in dataContext.Photos on userId equals f.UserId into userPhoto
           from userPhotos in userPhoto.DefaultIfEmpty()
          where userPhotos.IsMain==true
          join g in dataContext.Photos on recipientId equals g.UserId into recipientPhoto
           from recipientPhotos in recipientPhoto.DefaultIfEmpty()
           where recipientPhotos.IsMain==true

           select new Message{
         SenderName=d.UserName,
        RecipientName=c.UserName,
      SenderPhoto=userPhotos.URl,
      RecipientPhoto=recipientPhotos.URl
           }

        ).FirstOrDefault();

        return result;
      }
      
 internal static Photo GetPhotoMainById(int userId,DataContext dataContext)
        {
            var result=(from  b in dataContext.Photos
         where b.UserId==userId && b.IsMain==true
              
               
              select  new Photo
              {
URl=b.URl,
Id=b.Id,


              }
            
            ).FirstOrDefault();
             return result;
        }
    
internal static Photo GetPhotoById(int userId,int photoId,DataContext dataContext)
        {
            var result=(from  b in dataContext.Photos
         where b.UserId==userId && b.Id==photoId
              
               
              select  new Photo
              {
URl=b.URl,
Id=b.Id,
PublicId=b.PublicId,

              }
            
            ).FirstOrDefault();
             return result;
        }
    


       internal static User GetUserById(int UserId,DataContext dataContext)
        {
            var result=(from  b in dataContext.Users
            where b.Id==UserId
              
           // join c in dataContext.Photos on b.id equals c.UserId into a
          
           //  from photos in a.DefaultIfEmpty()
            
              
               
              select  new User
              {
                  UserName=b.UserName,
                  PasswordHash=b.PasswordHash,
                  PasswordSalt=b.PasswordSalt,
                  Gender=b.Gender,
                  DateofBirth=b.DateofBirth,
                  KnownAs=b.KnownAs,
                  Introduction=b.Introduction,
                 LookingFor=b.LookingFor,
                  LastActive=b.LastActive,
                  Interests=b.Interests,
                  Country=b.Country,
                  Created=b.Created,
                  City=b.City,
                  Id=b.Id,
                //   PhotoUrl=photos.URl



              }
            
            ).FirstOrDefault();
             return result;
        }
    }
}