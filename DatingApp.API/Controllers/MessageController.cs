using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOS;
using DatingApp.API.Helper;
using DatingApp.API.Services;
using DatingApp.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace DatingApp.API.Controllers
{
      [ServiceFilter(typeof(LogUserActivity))]
  

    [Authorize]

    [Route("api/[controller]")]
    [ApiController]
    public class MessageController:ControllerBase
    {
          private  readonly IMapper Mapper ;
        private readonly IDatingService idatingService;
        private readonly DataContext dataContext;
        public MessageController(IDatingService IdatingService,IMapper mapper,DataContext dataContext)
        {
            

            this.idatingService=IdatingService;
            this.Mapper = mapper;
            idatingService = IdatingService;
            this.dataContext=dataContext;
        }

        [HttpGet("{id}",Name="GetMessage")]   // the id was used there for me to be able to use CreatedAtroute for CreateMessage action
        public async System.Threading.Tasks.Task<IActionResult> GetMessage(int userId, int id)
    {
        var currentUserId=  int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        if(id!=currentUserId)
        {
            return Unauthorized();
        }
        var message=this.idatingService.GetMessage(id);
        if(message==null)
        {
            return NotFound();
        }
        return Ok(message);
    }


  [HttpGet("GetMessageForUser")]
        public async System.Threading.Tasks.Task<IActionResult> GetMessageForUser(int userId,[FromQuery]MessageParams message)
    {
        var currentUserId=  int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        if(userId!=currentUserId)
        {
            return Unauthorized();
        }
        var messageList= await this.idatingService.GetMessagesForUser(message);
       
       Response.AddPagination(messageList.CurrentPage,messageList.PageSize,messageList.TotalCount,messageList.TotalPages);
        return Ok(messageList);
    }
[HttpGet("GetMessageThread")]
        public async System.Threading.Tasks.Task<IActionResult> GetMessageThread(int userId,int recipientId)
    {
        var currentUserId=  int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        if(userId!=currentUserId)
        {
            return Unauthorized();
        }
        var messageList= await this.idatingService.GetMessgageThread(userId,recipientId);
       
     
        return Ok(messageList);
    }





[HttpPost("CreateMessage")]
    public async Task<IActionResult> CreateMessage(int userId, MessageForCreationDto messageForCreationDto)
    {
         var currentUserId=  int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        if(userId!=currentUserId)
        {
            return Unauthorized();
        }
        messageForCreationDto.SenderId=userId;
                var recipient= this.idatingService.GetUserById(messageForCreationDto.RecipientId);

        if(recipient==null)
        {
            return BadRequest("Could not find user");
        }
        var threadDetails=await this.idatingService.GetThreadDetails(messageForCreationDto.SenderId,messageForCreationDto.RecipientId);
    
messageForCreationDto.SenderName=threadDetails.SenderName;
messageForCreationDto.SenderPhoto=threadDetails.SenderPhoto;
messageForCreationDto.RecipientPhoto=threadDetails.RecipientPhoto;
messageForCreationDto.RecpientName=threadDetails.RecipientName;



   
        var message=this.Mapper.Map<Message>(messageForCreationDto);
        
        var result=this.idatingService.SaveMessage(message);

        if(!string.IsNullOrEmpty(result))
        {
           return BadRequest("error");
        }
 return CreatedAtRoute("GetMessage",new{id=message.Id},message);
    }
        [HttpGet("DeleteMessage")]
        public IActionResult DeleteMessage(int messageId,int userId)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if (userId != currentUserId)
            {
                return Unauthorized();
            }
            this.idatingService.DeleteMessage(messageId,userId);


            return Ok(new{message="Message Deleted Successfully"});
        }

[HttpGet("MarkAsRead")]
      public async Task<IActionResult> MarkAsRead(int userId,int id)
      {
           var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if (userId != currentUserId)
            {
                return Unauthorized();
            }
           
          var message=this.dataContext.messages.FirstOrDefault(x=>x.Id==id);
          if(userId!=message.RecipientId)
          {
              return Unauthorized();
          }
              message.IsRead=true;
              message.DateRead=DateTime.Now;
              this.dataContext.SaveChanges();

              return NoContent();
        }
      }

    }
