using System.Collections;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOS;
using DatingApp.API.Helper;
using DatingApp.API.Interface;
using DatingApp.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


//three ways of passing info in .net api

//1 the specifying the [HttpGet("url name")]  mostly for post
//2 the specifying route ['Route']    [Route("/api/photos/{userId:int}/savePhoto")]  //get and post
//3  the using FromQuery  // mostly for get  e.g getUsers action under Users Controller
namespace DatingApp.API.Controllers
{
     [ServiceFilter(typeof(LogUserActivity))]
  

    [Authorize]

    [Route("api/[controller]")]
    [ApiController]
    
    public class UsersController :ControllerBase
    {

       
        private readonly  IDatingService IdatingService;


        private  readonly IMapper Mapper ;


private readonly DataContext dataContext;
        public UsersController(IDatingService IdatingService,IMapper mapper,DataContext dataContext)
        {
             this.IdatingService=IdatingService;
            this.Mapper = mapper;
            this.dataContext=dataContext;
        }
 
   [HttpGet]

      public async Task<IActionResult>GetUsers([FromQuery]UserParams user)
      {
        var currentUserId=  int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
          var userId= this.IdatingService.GetUserById( currentUserId);
          if(string.IsNullOrEmpty(user.Gender))
          {
              user.Gender=userId.Gender=="male" ?"female" :"male";
          }
        user.UserId  =currentUserId;
          var users= await this.IdatingService.GetAllUsers(user);
         


                                        //destination model   //coming model
         var userReturn=this.Mapper.Map<IEnumerable<UserForListDTO>>(users);
         Response.AddPagination(users.CurrentPage,users.PageSize,users.TotalCount,users.TotalPages);
    
          return Ok(userReturn);
      }

    



   [HttpPost("LikeUser")]
   public async Task<IActionResult> LikeUser(Like like)
   {
       //check if theres a previous like
       var likeInfo=this.IdatingService.GetPreviousLike(like);

       if(likeInfo!=null)
       {
           return BadRequest(new{status="You have already likes this user"});
       }else{
           var updateInfo=this.IdatingService.LikeUser(like);
         
           return Ok(new{status="You liked the user"});
       }
   }

  
   [HttpGet("GetUserLike")]
   public async Task<IActionResult> GetUserLikes([FromQuery]UserLikesParams user)  //means it can contain null
   {
       var id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
    
          
      
       
       if(user.UserStatusLikes=="Likers")
       {
           var users= await this.IdatingService.GetLikers(user,id);
              var userReturn=this.Mapper.Map<IEnumerable<UserForLikesDTO>>(users);
         Response.AddPagination(users.CurrentPage,users.PageSize,users.TotalCount,users.TotalPages);
           return Ok(userReturn);
       }
       else{
           var users= await this.IdatingService.GetUserLikes(user,id);
              var userReturn=this.Mapper.Map<IEnumerable<UserForLikesDTO>>(users);
         Response.AddPagination(users.CurrentPage,users.PageSize,users.TotalCount,users.TotalPages);
           return Ok(userReturn);
       }
        
   }
[HttpGet("GetUser")]
    public  IActionResult GetUser(int Id)
      {
          var user= this.IdatingService.GetUserById(Id);

          var usersReturn=this.Mapper.Map<UserForDetailsDTO>(user);
          return Ok(usersReturn);
      }


      
[HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, UserForUpdateDTO userForUpdateDTO)
    {
      if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
      {
          return Unauthorized();
      }
      
      var user=this.IdatingService.UpdateUser(userForUpdateDTO,id);

      if(user!=null)
    {
        return Ok(user);
    }

    return Ok();
      
     
    }
    }

}