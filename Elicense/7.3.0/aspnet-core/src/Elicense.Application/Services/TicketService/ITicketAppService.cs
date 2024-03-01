using Abp.Application.Services;
using Elicense.Services.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Services.TicketService
{
    public interface ITicketAppService : IApplicationService
    {
        Task<TicketDto> CreateAsync(TicketDto input);
        Task<TicketDto> UpdateAsync(TicketDto input);
        Task<TicketDto> GetAsync(Guid Id);
        Task<List<TicketDto>> GetAllAsync();
        Task<List<TicketDto>> GetByNationalId(string nationalId);
        Task Delete(Guid id);

    }
}
