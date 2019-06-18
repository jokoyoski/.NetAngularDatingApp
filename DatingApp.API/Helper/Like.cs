using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Helper
{
    public class Like
    {
[Key]
        public int LikeId{get;set;}      
        
        
          public int LikeeId{get;set;}

        public int LikerId{get;set;}
    }
}