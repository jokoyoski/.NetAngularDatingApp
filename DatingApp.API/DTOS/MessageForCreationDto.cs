using System;

namespace DatingApp.API.DTOS
{
    public class MessageForCreationDto
    {
        public int SenderId {get;set;}

        public int RecipientId {get;set;}
        public DateTime MessageSent{get;set;}

        public string Content {get;set;}

        public string SenderName{get;set;}
        public string RecpientName{get;set;}

        public string SenderPhoto{get;set;}
        public string RecipientPhoto{get;set;}

        public MessageForCreationDto()
        {
            MessageSent=DateTime.Now;
        }
    }
}