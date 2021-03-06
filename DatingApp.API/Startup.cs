﻿using System;
using System.Collections.Generic;
using System.Linq;
using DatingApp.API.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using DatingApp.API.Data;
using DatingApp.API.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using DatingApp.API.Helper;
using DatingApp.API.Services;
using AutoMapper;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.IdentityModel.Logging;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)  
        {  
//  You need to use the same user data model in SignInManager and UserManager
   IdentityBuilder builder =services.AddIdentityCore<User>(Options=>{

       Options.Password.RequireNonAlphanumeric=false;
       Options.Password.RequireDigit=false;
       Options.Password.RequiredLength=4;
       Options.Password.RequireUppercase=false;
   });
   builder=new IdentityBuilder(builder.UserType,typeof(Role),builder.Services);
   builder.AddEntityFrameworkStores<DataContext>();  // the data context i want to use to save all the user info
   builder.AddRoleValidator<RoleValidator<Role>>();
   builder.AddRoleManager<RoleManager<Role>>();
   builder.AddSignInManager<SignInManager<User>>();
          
           
            //this line was added after we added dbcontext                                                                                    //where defaultconnection in the appsettings.json we sepcify //this was added after we added connection string
            services.AddDbContext<DataContext>(x=>x.UseSqlServer(Configuration.GetConnectionString("DevConnection")));    //1 
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);
            services.AddCors();
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));
            Mapper.Reset();
            services.AddAutoMapper();  // we added automapper here and we  inject it in users class and create a profile class to add it
          services.AddTransient<UserSeed>(); //seeding
            services.AddScoped<IDatingRepository,DatingRepository>();
             services.AddScoped<IDatingService,DatingService>();
             services.AddScoped<IAuthService,AuthService>();

              services.AddScoped<IUserFactory,UserFactory>();
                services.AddScoped<IAuthRepository,AuthRepository>();
                services.AddScoped<LogUserActivity>();   //LogUserActivity
              

     
            //authentication middleware for jwt authorize
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options=>{options.TokenValidationParameters=new TokenValidationParameters
            {
                ValidateIssuerSigningKey=true,
                IssuerSigningKey= new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                ValidateIssuer=false,
                ValidateAudience=false
               
            };});

               services.AddAuthorization(Options=>{   // we added this to specify roles in the Authhorixe action method
                Options.AddPolicy("RequiredAdminRole",policy=>policy.RequireRole("Admin"));
                 Options.AddPolicy("RequiredModeratorRole",policy=>policy.RequireRole("Admin","Moderator"));
                  Options.AddPolicy("VipOnle",policy=>policy.RequireRole("VIP"));
            });

                  //it was when i added this line that the models state were showing properly on the angular including the
                  //interceptor
              services.Configure<ApiBehaviorOptions>(options =>
        {

            options.InvalidModelStateResponseFactory = context =>
            {
                 object responseObject = context.ModelState.Select(entry => entry.Value.Errors.Select(error => error.ErrorMessage)).Aggregate(Enumerable.Empty<string>(), (agg, val) => agg.Concat(val));
                return new BadRequestObjectResult(responseObject);
            };
        });
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env,UserSeed userSeed)
        {
           
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //error handler
                app.UseExceptionHandler(builder=>{builder.Run(async context=>{
                    context.Response.StatusCode=(int)HttpStatusCode.InternalServerError;
                    var error=context.Features.Get<ExceptionHandlerFeature>();
                    if(error!=null)
                    {
                      context.Response.AddApplicationError(error.Error.Message);
                         await context.Response.WriteAsync(error.Error.Message);  //writing out http error into a message
                    }
                });
                
                });
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            }   //app.UseHsts();
            

           // app.UseHttpsRedirection();
          //  userSeed.SeedUsers();
           app.UseCors(x=>x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());  //cors 
           app.UseAuthentication();  //for authentication middleware   
            app.UseDefaultFiles();
       app.UseStaticFiles();
          
            app.UseMvc(routes=>{     //for fallback , this was used when we added angulr into wwwroot
                routes.MapSpaFallbackRoute(name:"spa-fallback",defaults:new{  //this is just telling our app to redirect to the controller if it dosent undertsand the route
                    Controller="Fallback",Action="Index"  
                });
            });
        }
    }
}




//dotnet restore -v n --no-cache