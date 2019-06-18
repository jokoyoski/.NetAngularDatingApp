using System;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Interface;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Helper
{
    public class LogUserActivity : IAsyncActionFilter
    {
      
          private readonly DataContext dataContext;

        public  LogUserActivity(DataContext dataContext)
        {
this.dataContext=dataContext;
        }
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {  var result=string.Empty;
           var resultContext= await next();
             var id=int.Parse((resultContext.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value));
             var repo= resultContext.HttpContext.RequestServices.GetService<IDatingRepository>();
    
    try{
 var user=repo.GetUser(id);
       user.LastActive=DateTime.Now;
       this.dataContext.SaveChanges();
    } catch(Exception e){
         result = string.Format("Update User - {0} , {1}", e.Message,
                    e.InnerException != null ? e.InnerException.Message : "");
    }       
        }
    }
}