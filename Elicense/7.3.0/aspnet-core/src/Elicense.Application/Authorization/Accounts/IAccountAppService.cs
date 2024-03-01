using System.Threading.Tasks;
using Abp.Application.Services;
using Elicense.Authorization.Accounts.Dto;

namespace Elicense.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
