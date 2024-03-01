using System.ComponentModel;

namespace Elicense.Domain.Enums
{
    public enum TicketType : long 
    {
        [Description("None")]
        None = 1,

        [Description("Registration")]
        RegistrationLicensingOfMotorVehicles = 2,

        [Description("Fitness of Driver")]
        FitnessOfDriver = 3 ,

        [Description("Fitness of Vehicle")]
        FitnessOfVehicle = 4 
    }
}
