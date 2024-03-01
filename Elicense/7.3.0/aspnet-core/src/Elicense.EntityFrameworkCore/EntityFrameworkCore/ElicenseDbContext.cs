using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Elicense.Authorization.Roles;
using Elicense.Authorization.Users;
using Elicense.MultiTenancy;
using JetBrains.Annotations;
using Elicense.Domain;

namespace Elicense.EntityFrameworkCore
{
    public class ElicenseDbContext : AbpZeroDbContext<Tenant, Role, User, ElicenseDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Person> Persons { get; set; }
        public DbSet<Applicant> Applicants { get; set; }

        public DbSet<Ticket> Ticket { get; set; }

        public ElicenseDbContext(DbContextOptions<ElicenseDbContext> options)
            : base(options)
        {
            
        }
    }
}
