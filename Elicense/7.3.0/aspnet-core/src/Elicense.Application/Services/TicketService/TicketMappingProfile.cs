using AutoMapper;
using Elicense.Domain;
using Elicense.Services.Dtos;

namespace Elicense.Services.TicketService
{
    public class TicketMappingProfile : Profile
    {
        public TicketMappingProfile()
        {
            CreateMap<Ticket, TicketDto>();
            CreateMap<TicketDto, Ticket>();
           

        }
    }
}
