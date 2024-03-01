using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Elicense.EntityFrameworkCore;
using Elicense.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Elicense.Web.Tests
{
    [DependsOn(
        typeof(ElicenseWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class ElicenseWebTestModule : AbpModule
    {
        public ElicenseWebTestModule(ElicenseEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ElicenseWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(ElicenseWebMvcModule).Assembly);
        }
    }
}