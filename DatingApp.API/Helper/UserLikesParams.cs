namespace DatingApp.API.Helper
{
    public class UserLikesParams
    {
        
        private const int MaxPageSize=50;
        public int PageNumber{get;set;}=1;



        public string  UserStatusLikes{get;set;}

    
        private int minAge=18;
       
      
       public int MinAge
       {
           get { return minAge;}
           set { minAge=(value==0)?minAge:value;}
       }
       

        private int maxAge=99;
       
      
       public int MaxAge
       {
           get { return maxAge;}
           set { maxAge=(value==0)?maxAge:value;}
       }

        private int pageSize=10;
        
        public int PageSize
        {
            get { return pageSize;}
            set { pageSize=(value>MaxPageSize)?MaxPageSize:value;}
        }
    }
}