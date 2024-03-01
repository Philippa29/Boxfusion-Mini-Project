using Abp.Domain.Entities.Auditing;
using Elicense.Domain.Enums;
using System;

namespace Elicense.Domain
{
    public class Ticket : FullAuditedEntity<Guid>
    {
        public virtual string NationalId { get; set; }

        public virtual TicketType? TicketType { get; set; }

        public virtual int Amount { get; set; }

        public virtual int Points { get; set; }

    }
}
