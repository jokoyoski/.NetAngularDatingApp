using System;
using System.Collections.Generic;
using DatingApp.API.Model;

namespace DatingApp.API.DTOS
{
    public class UserForDetailsDTO
    {
       
       
         
        public int id {get;set;}

        public string UserName {get;set;}

        public string Gender {get;set;}

        public System.DateTime DateofBirth {get;set;}

        public string KnownAs {get;set;}

        public DateTime LastActive {get;set;}


           public string LookingFor {get;set;}
        public string Introduction {get;set;}

        

        public DateTime Created {get;set;}


      
        public string PhotoUrl {get;set;}
        public string Interests {get;set;}

        public string City {get;set;}

        public string Country {get;set;}

        public List<Photo>Photos{get;set;}


    }
}