using Microsoft.EntityFrameworkCore;

using ELicense.API.Models.Domain;

namespace ELicense.API.Data
{
    public class ELicenseDBContext: DbContext 
    {
        public ELicenseDBContext(DbContextOptions dbContextOptions):base(dbContextOptions) { }


        public DbSet<Person> Persons { get; set; }

        public DbSet<Applicant> Applicants { get; set; }

        public DbSet<Employee> Employees { get; set; }


    }
}
