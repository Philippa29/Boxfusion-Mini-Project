using Abp.Application.Services;
using Elicense.MultiTenancy.Dto;

namespace Elicense.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

