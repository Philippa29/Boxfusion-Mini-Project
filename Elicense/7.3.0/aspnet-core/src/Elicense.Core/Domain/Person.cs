using Abp.Domain.Entities.Auditing;
using Elicense.Authorization.Users;
using System;

namespace Elicense.Domain
{
    public class Person : FullAuditedEntity<Guid>
    {
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual string EmailAddress { get; set; }
        
        public virtual string PhoneNumber { get; set;}
        
        public virtual User User { get; set; }
    }
}
