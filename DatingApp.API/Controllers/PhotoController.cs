using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Interface;
using DatingApp.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Model;
using Microsoft.Extensions.Options;
using CloudinaryDotNet;
using System.Security.Claims;
using CloudinaryDotNet.Actions;
using AutoMapper;
using DatingApp.API.Helper;

namespace DatingApp.API.Controllers
{
     [ServiceFilter(typeof(LogUserActivity))]
    
         [Authorize]
         [Route("api/[controller]")]
    //[Route("api/users/{userId}/photos")]
    [ApiController]
    
    public class PhotoController :ControllerBase
    {

       
        private readonly  IDatingService IdatingService;
        private readonly IOptions<CloudinarySettings> cloudinaryCofig;
        private Cloudinary cloudinary;
        public PhotoController(IDatingService IdatingService,IOptions<CloudinarySettings> cloudinaryCofig, IMapper mapper)
        {
             this.IdatingService=IdatingService;
             this.cloudinaryCofig=cloudinaryCofig;

             Account acc=new Account(

               cloudinaryCofig.Value.CloudName,
               cloudinaryCofig.Value.ApiKey,
               cloudinaryCofig.Value.APiSecret

             );
             cloudinary=new Cloudinary(acc);
        }

   [HttpGet("{id}",Name="GetPhoto")]

public async Task<IActionResult> GetPhoto(int id)
{

    var photoFromRepo= await this.IdatingService.Getphoto(id);

    return Ok(photoFromRepo);
}

[Route("/api/photos/{userId:int}/savePhoto")]  
[HttpPost]

public async Task<IActionResult> AddPhotoForUser(int userId,[FromForm]PhotoForCreationDTO  Image)
{
   if(userId!= int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
      {
          return Unauthorized();
      }
      var userFromRepo= this.IdatingService.GetUserById(userId);

      var file=Image.FormFile;

      var uploadResult=new ImageUploadResult();

      if(file.Length>0)
      {
      using(var stream= file.OpenReadStream())
      {
        var uploadParams=new ImageUploadParams()
        {
 File=new FileDescription(file.Name,stream),
 Transformation=new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
        };
        uploadResult=cloudinary.Upload(uploadParams);
      }
      }

   Image.URl=uploadResult.Uri.ToString();
      Image.PublicId=uploadResult.PublicId;
       Image.UserId=userId;
   var result= Mapper.Map<Photo>(Image);
     this.IdatingService.SavePicture(result,out int Id);
     if(Id>0)
     {
         return CreatedAtRoute("GetPhoto",new{id=Id},result); //return redirect to action
     }
        

     //take it to repository and save it there
     return BadRequest("Error Try Again");
}
    

[Route("/api/photos/{photoId:int}/{userId:int}/updatePhoto")]  
[HttpGet]
public async Task<IActionResult> UpdatePhoto(int photoId, int userId)
{
  //check if user exist

  if(userId!= int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
      {
          return Unauthorized();
      }

      //check if the user pic is the current Main

      var isMain=  await this.IdatingService.CheckForIsMain(userId,photoId);

      if(isMain)
      {
        return Ok(new{status="Your Current Picture is the main"});
      }

    //update Main
    var updateMain=this.IdatingService.UpdatePhoto(userId,photoId);
    var photoUrl=this.IdatingService.GetUserById(userId);

    return Ok(new{status="updated",photoUrl=photoUrl.PhotoUrl});

}


[Route("/api/photos/{photoId:int}/{userId:int}/deletePhoto")]  
[HttpGet]
public async Task<IActionResult> DeletePhoto(int photoId, int userId)
{
  //check if user exist

  if(userId!= int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
      {
          return Unauthorized();
      }

      //check if the user pic is the current Main

      var isMain=  await this.IdatingService.CheckForIsMain(userId,photoId);

      if(isMain)
      {
        return BadRequest(new{status="You cannot delete your main picture"});
      }
      var photo=this.IdatingService.GetPhotoById(userId,photoId);
var deleteParams=new DeletionParams(photo.PublicId);
      var result=cloudinary.Destroy(deleteParams);
      if(result.Result=="ok")
      {
        this.IdatingService.DeletePhotoById(photo.Id);
      }

    
    return Ok(new{status="Photo deleted successfully, reload the page please"});

}
    }
}
   
 
    
