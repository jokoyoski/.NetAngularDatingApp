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
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Controllers
{
     
    [Route("api/[controller]")]
   
    [ApiController]
    public class AuthController:ControllerBase
    {
        private readonly IAuthService authRepo;
        private readonly IConfiguration config;

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
          private  readonly IMapper mapper ;
        private readonly IDatingService datingService;
        
        public AuthController(IAuthService authRepo,SignInManager<User> signInManager,IConfiguration config,IMapper mapper,IDatingService datingService,UserManager<User> _userManager)
        {
        this.authRepo=authRepo;
        this.config=config;
        this.datingService=datingService;
        this._signInManager=signInManager;
        this.mapper=mapper;
        this._userManager=_userManager;
      

        }




[HttpPost("register")]

public  async Task<IActionResult> Register(UserForRegisterDTO userForRegisterDTO )
        {
             var usersReturn=this.mapper.Map<User>(userForRegisterDTO);
                
               var user=this._userManager.FindByNameAsync(userForRegisterDTO.UserName);
              
                 var result=await this._userManager.CreateAsync(usersReturn,usersReturn.Password);
                 if(user.Result!=null)
                 {
                         return BadRequest("UserName already exist");
                 }

                 var userModel=new User
                 {
                     UserName=usersReturn.UserName
                 };
                 
                 if(result.Succeeded)
                 {
 return Ok(new{
                     success="User Has been Registered Successfully, You can then proceed to login",
                   
                 });
                 }
            
            return BadRequest(result.Errors);
                 
        }


[HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO userForRegisterDTO)
        {
            var result=string.Empty;
           try{
   var userInfo=await this._userManager.FindByNameAsync(userForRegisterDTO.UserName);
   var results= await this._signInManager.CheckPasswordSignInAsync(userInfo,userForRegisterDTO.password,false);
   if(!results.Succeeded)
   {
       
  return BadRequest("You are not authorized");
   }

            
           
            
            
            var claims= new List<Claim>
            {
           new Claim(ClaimTypes.NameIdentifier,userInfo.Id.ToString()),
           new Claim(ClaimTypes.Name,userInfo.UserName),

            
            };
            var roles=await this._userManager.GetRolesAsync(userInfo);   //get roles
            foreach(var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role,role));
            }
            var key= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config.GetSection("AppSettings:Token").Value));
            var creds= new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor= new SecurityTokenDescriptor
            {
                Subject= new ClaimsIdentity(claims),
                Expires=DateTime.UtcNow.AddHours(3),
                SigningCredentials=creds,
                NotBefore=DateTime.UtcNow,

            };
         
            var tokenHandler= new JwtSecurityTokenHandler ();

            var token= tokenHandler.CreateToken(tokenDescriptor); 

            var photoUrl=this.datingService.GetUserById(userInfo.Id);

   
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
