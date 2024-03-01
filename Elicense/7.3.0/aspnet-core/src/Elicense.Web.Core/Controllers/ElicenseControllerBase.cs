using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Elicense.Controllers
{
    public abstract class ElicenseControllerBase: AbpController
    {
        protected ElicenseControllerBase()
        {
            LocalizationSourceName = ElicenseConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
