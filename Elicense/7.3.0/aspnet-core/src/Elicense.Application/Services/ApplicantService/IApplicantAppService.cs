using Abp.Application.Services;
using Elicense.Services.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Services.ApplicantService
{
    public interface IApplicantAppService : IApplicationService
    {
        Task<ApplicantDto> CreateAsync(ApplicantDto input);
        Task<ApplicantDto> UpdateAsync(ApplicantDto input);
        Task<ApplicantDto> GetAsync(Guid id);
        Task Delete(Guid id);
    }
}
