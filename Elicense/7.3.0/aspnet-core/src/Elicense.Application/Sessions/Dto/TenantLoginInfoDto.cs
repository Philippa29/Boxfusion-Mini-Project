using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Elicense.MultiTenancy;

namespace Elicense.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
