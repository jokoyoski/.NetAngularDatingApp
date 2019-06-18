using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOS
{
    public class UserForRegisterDTO
    {
       
       
        

        public string UserName {get;set;}                                         
                                                                                  
        public string Gender {get;set;}

        public System.DateTime DateofBirth {get;set;}

        public string KnownAs {get;set;}

        public string LookingFor {get;set;}
        
		public string Password {get;set;}
        
        public string City {get;set;}

        public string Country {get;set;}

         
    }
}