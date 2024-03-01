using Abp.AutoMapper;
using Elicense.Domain;
using Elicense.Domain.Enums;

namespace Elicense.Services.Dtos
{
    [AutoMap(typeof(Ticket))]
    public class TicketDto
    {
        public string NationalId { get; set; }

        public TicketType? TicketType { get; set; }

        public int Amount { get; set; }

        public int Points { get; set; }
    }
}
