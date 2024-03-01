using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Domain
{
    public class Applicant : Person
    {
        public virtual string NationalID { get; set; }
    }
}
