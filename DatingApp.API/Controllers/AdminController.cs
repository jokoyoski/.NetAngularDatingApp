using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using DatingApp.API.Model;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Controllers
{  
    [Route("api/[controller]")]
   
    [ApiController]
    public class AdminController:ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManager;
        public AdminController(DataContext dataContext,UserManager<User> userManager)
        {
this.dataContext=dataContext;
this.userManager=userManager;
        }
          [Authorize(Policy="RequiredAdminRole")]
          [HttpGet("GetUsersRole")]
          public async Task<IActionResult> GetUsersRole()
          {
              var usersList=(from u in dataContext.Users orderby u.UserName
             select new {
Id=u.Id,
UserName=u.UserName,
Roles=(from c in dataContext.UserRoles
  where u.Id==c.UserId
join role in dataContext.Roles on c.RoleId equals role.Id select role.Name).ToList()
             }).OrderBy(x=>x.UserName);
             

              return Ok(usersList);
          }
    [Authorize(Policy="RequiredAdminRole")]
  [HttpGet("EditRoles")]
     public async Task<IActionResult> EditRoles(string userName,RoleEditDto roleEditDto)
     {
         var user=await this.userManager.FindByNameAsync(userName);
         var userRoles=await this.userManager.GetRolesAsync(user);
         var selectedRoles=roleEditDto.RoleNames;
         selectedRoles=selectedRoles??new string []{};
         var result=await this.userManager.AddToRolesAsync(user,selectedRoles.Except(userRoles));
        result=await this.userManager.RemoveFromRolesAsync(user,userRoles.Except(selectedRoles));
           return Ok(await this.userManager.GetRolesAsync(user));
     }
    }

  
}