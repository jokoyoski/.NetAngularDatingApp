using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOS
{
    public class UserForLoginDTO
    {
        [Required]
        public string UserName{get;set;}

[Required]
        public string password{get;set;}
    }
}