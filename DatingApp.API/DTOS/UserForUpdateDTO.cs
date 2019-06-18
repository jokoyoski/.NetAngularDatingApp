using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.API.DTOS
{
    public class UserForUpdateDTO
    {
       
        public int id {get;set;}

        public string UserName {get;set;}

        public string Gender {get;set;}

        public System.DateTime DateofBirth {get;set;}

        public string KnownAs {get;set;}

        public DateTime LastActive {get;set;}


      public string LookingFor {get;set;}
    public string Introduction {get;set;}

        


       [NotMapped]
        public string PhotoUrl {get;set;}
        public string Interests {get;set;}

        public string City {get;set;}

        public string Country {get;set;}
    }
}