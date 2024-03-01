using AutoMapper;
using Elicense.Authorization.Users;
using Elicense.Domain;
using Elicense.Services.Dtos;

namespace Elicense.Services.ApplicantService
{
    public class ApplicantMappingProfile : Profile
    {
        public ApplicantMappingProfile()
        {
            CreateMap<Applicant,ApplicantDto>();
            CreateMap<ApplicantDto,Applicant>();
            CreateMap<ApplicantDto, User>()
                .ForMember(e => e.Id, d => d.Ignore()); //ignores keys 

        }
    }
}
