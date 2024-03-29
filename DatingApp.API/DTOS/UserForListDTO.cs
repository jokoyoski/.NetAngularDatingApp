using System;

namespace DatingApp.API.DTOS
{
    public class UserForListDTO
    {
        
        public int id {get;set;}

        public string UserName {get;set;}

        public string Gender {get;set;}

        public int Age {get;set;}

        public string KnownAs {get;set;}

        public System.DateTime DateofBirth {get;set;}
   
        public DateTime LastActive {get;set;}

       
        public DateTime Created {get;set;}

        
        public string City {get;set;}

        public string Country {get;set;}


        public string PhotoUrl {get;set;}

    }
}