using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly  DataContext dbContext;
        public ValuesController(DataContext db)
        {
             dbContext=db;
        }
        // GET api/values
       [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues ()
        {
            var dbList= await dbContext.Values.ToListAsync();
           
            return Ok(dbList);
        }

  // [Route("listo")]   
  //[Route("/api/authors/{authorId:int}/{jokoId:int}/books")]  
  // [HttpGet]
  //  public async Task<IActionResult> GetBook(int authorId) { 
        
      //  return Ok(); }
        // GET api/values/5
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValueById(int id)
        {
            var dbInfo= await  dbContext.Values.FirstOrDefaultAsync(x=>x.Id==id);
            return Ok(dbInfo);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
