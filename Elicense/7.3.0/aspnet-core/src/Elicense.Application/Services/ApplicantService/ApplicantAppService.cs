using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.IdentityFramework;
using Abp.UI;
using Elicense.Authorization.Users;
using Elicense.Domain;
using Elicense.Services.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Services.ApplicantService
{
    public class ApplicantAppService : ApplicationService, IApplicantAppService
    {
        private readonly IRepository<Applicant, Guid> _applicantRepository;
        private readonly UserManager _userManager;
        public ApplicantAppService(IRepository<Applicant,Guid> applicantRepository, UserManager userManager)
        {
            _applicantRepository = applicantRepository; 
            _userManager = userManager;
        }
        public async Task<ApplicantDto> CreateAsync(ApplicantDto input)
        {
            var user = ObjectMapper.Map<User>(input);
            user.UserName = input.FirstName;
            user.Name = input.FirstName; 
            user.Surname = input.LastName;
            
            ObjectMapper.Map(input, user);
            if (!string.IsNullOrEmpty(user.NormalizedUserName) && !string.IsNullOrEmpty(user.NormalizedEmailAddress))
                user.SetNormalizedNames();
            user.TenantId = AbpSession.TenantId;
            await _userManager.InitializeOptionsAsync(AbpSession.TenantId);
            CheckErrors(await _userManager.CreateAsync(user, input.Password));
            
            var applicant = ObjectMapper.Map<Applicant>(input);
            applicant.User = user;
            await _applicantRepository.InsertAsync(applicant);
            CurrentUnitOfWork.SaveChanges();
            return ObjectMapper.Map<ApplicantDto>(applicant);

        }

        public async Task Delete(Guid id)
        {
            await _applicantRepository.DeleteAsync(id);

        }

        public async Task<ApplicantDto> GetAsync(Guid id)
        {
            //linq statement 
            var applicant = await _applicantRepository.GetAllIncluding(m => m.User)
                                     .FirstOrDefaultAsync(x => x.Id == id);
            if (applicant == null)
                throw new UserFriendlyException("Applicant not found!");
            return ObjectMapper.Map<ApplicantDto>(applicant);
        }

        public async Task<ApplicantDto> UpdateAsync(ApplicantDto input)
        {
            var applicant = _applicantRepository.Get(input.Id);
            var updt = await _applicantRepository.UpdateAsync(ObjectMapper.Map(input, applicant));
            return ObjectMapper.Map<ApplicantDto>(updt);
        }
        protected virtual void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
