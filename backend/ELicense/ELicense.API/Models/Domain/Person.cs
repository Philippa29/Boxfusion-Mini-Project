namespace ELicense.API.Models.Domain
{
    public class Person
    {

        public Guid PersonID { get; set; } 
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }   

        public string Password { get; set; }
    }
}
