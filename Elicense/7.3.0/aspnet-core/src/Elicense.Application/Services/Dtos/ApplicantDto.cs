using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Services.Dtos
{
    public class ApplicantDto : PersonDto
    {
        public string NationalID { get; set; }
    }
}
