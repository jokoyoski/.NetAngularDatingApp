using AutoMapper;
using DatingApp.API.DTOS;
using DatingApp.API.Model;

namespace DatingApp.API.Helper
{
    public class AutoMapperProfiles :Profile
    {
        
        public AutoMapperProfiles()
        {
            AllowNullDestinationValues=true;
            // CreateMap<User,UserForUpdateDTO>();
            CreateMap<User,UserForListDTO>();
            CreateMap<UserView,UserForDetailsDTO>();
            CreateMap<Photo,PhotoForCreationDTO>();

            //the source first, then the destination
            CreateMap<UserForRegisterDTO,User>(MemberList.Source);
            CreateMap<UserLike,UserForLikesDTO>(MemberList.Source);
            CreateMap<MessageForCreationDto,Message>(MemberList.Source);
        }
    }
}