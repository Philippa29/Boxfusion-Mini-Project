using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Elicense.Authorization;

namespace Elicense
{
    [DependsOn(
        typeof(ElicenseCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class ElicenseApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<ElicenseAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(ElicenseApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
