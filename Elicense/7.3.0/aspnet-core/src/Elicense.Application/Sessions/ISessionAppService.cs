using System.Threading.Tasks;
using Abp.Application.Services;
using Elicense.Sessions.Dto;

namespace Elicense.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
