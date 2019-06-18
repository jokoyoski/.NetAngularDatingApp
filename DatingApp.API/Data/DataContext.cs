using DatingApp.API.Helper;
using DatingApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{

    //i added all these ones and add soemthing in the start yp page
    public class DataContext : DbContext
    {
        
        public DataContext(DbContextOptions<DataContext>options):base(options){}
       
        public DbSet<Values> Values{get;set;}
        public DbSet<User> Users {get;set;}
        public DbSet<Message>messages{get;set;}

        public DbSet<Like>Likes{get;set;}
        public DbSet<Photo> Photos {get;set;}
       
    }
}