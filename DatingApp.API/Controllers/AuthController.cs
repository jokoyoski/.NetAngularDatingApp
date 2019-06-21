using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.DTOS;
using DatingApp.API.Interface;
using DatingApp.API.Model;
using DatingApp.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using DatingApp.API.Helper;

namespace DatingApp.API.Controllers
{
     
    [Route("api/[controller]")]
   
    [ApiController]
    public class AuthController:ControllerBase
    {
        private readonly IAuthService authRepo;
        private readonly IConfiguration config;
          private  readonly IMapper mapper ;
        private readonly IDatingService datingService;
        public AuthController(IAuthService authRepo,IConfiguration config,IMapper mapper,IDatingService datingService)
        {
        this.authRepo=authRepo;
        this.config=config;
        this.datingService=datingService;
        this.mapper=mapper;
        }




[HttpPost("register")]

public  IActionResult Register(UserForRegisterDTO userForRegisterDTO )
        {

             var usersReturn=this.mapper.Map<User>(userForRegisterDTO);
              
                 userForRegisterDTO.UserName=usersReturn.UserName.ToLower();
                  
                  
                 var user=this.authRepo.IsUserExist(usersReturn.UserName);
                 if(user==true)
                 {
                         return BadRequest("UserName already exist");
                 }

                 var userModel=new User
                 {
                     UserName=usersReturn.UserName
                 };
                 var createdUser=this.authRepo.RegisterUser(usersReturn,usersReturn.Password);
             return Ok(new{
                     success="User Has been Registered Successfully, You can then proceed tp login",
                   
                 });
                 
        }


[HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO userForRegisterDTO)
        {
            var result=string.Empty;
           try{
   var userInfo=this.authRepo.LoginUser(userForRegisterDTO.UserName,userForRegisterDTO.password);
            if(userInfo==null)
            {
 return Unauthorized("You are mad ");
            }
           
            
            
            var claims= new[]
            {
           new Claim(ClaimTypes.NameIdentifier,userInfo.id.ToString()),
           new Claim(ClaimTypes.Name,userInfo.UserName),

            
            };
            var key= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config.GetSection("AppSettings:Token").Value));
            var creds= new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor= new SecurityTokenDescriptor
            {
                Subject= new ClaimsIdentity(claims),
                Expires=DateTime.Now.AddHours(3),
                SigningCredentials=creds,
                NotBefore=null

            };
            if(tokenDescriptor.NotBefore!=null)
            {
                tokenDescriptor.NotBefore=null;
            }
            var tokenHandler= new JwtSecurityTokenHandler ();

            var token= tokenHandler.CreateToken(tokenDescriptor); 
            var photoUrl=this.datingService.GetUserById(userInfo.id);

   
            return Ok(new {
                token=tokenHandler.WriteToken(token) ,// we use this because we are returning it as ab oject
               photoUrl=photoUrl.PhotoUrl,
               gender=photoUrl.Gender
            });
       
           }
          
                catch (Exception e)
            {
                result = string.Format("SaveOrderFulfilment - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
            }
            return StatusCode(500,result);
           }
         
        
        }
    }
