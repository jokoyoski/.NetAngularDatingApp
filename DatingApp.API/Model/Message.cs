using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.API.Model
{
    public class Message
    {
        public int Id {get;set;}


        public int SenderId {get;set;}
        public int RecipientId {get;set;}

        public string Content {get;set;}
         
         public bool IsRead{get;set;}
        public DateTime? DateRead {get;set;}

         public DateTime? MessageSent {get;set;}

         public bool SenderDeleted{get;set;}
         
          public bool ReceipientDeleted{get;set;}
           
[NotMapped]
           public string SenderName {get;set;}
           [NotMapped]
           public string RecipientName {get;set;}
[NotMapped]           
public string SenderPhoto{get;set;}         

[NotMapped]
           public string RecipientPhoto{get;set;}
          }
    }
