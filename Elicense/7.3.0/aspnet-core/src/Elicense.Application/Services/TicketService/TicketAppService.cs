using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using Elicense.Domain;
using Elicense.Services.ApplicantService;
using Elicense.Services.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Elicense.Services.TicketService
{
    public class TicketAppService : ApplicationService, ITicketAppService
    {

        private readonly IRepository<Ticket, Guid> _ticketRepository;

        public TicketAppService(IRepository<Ticket, Guid> ticketRepository)
        {
            _ticketRepository = ticketRepository;
        }

        public async Task Delete(string id)
        {
            await _ticketRepository.DeleteAsync(m => m.NationalId == id);
        }

            public async Task<TicketDto> GetAsync(Guid id)
        {
            //linq statement 
            var ticket = await _ticketRepository.GetAllIncluding(m => m.NationalId)
                                     .FirstOrDefaultAsync(x => x.Id == id);
            if (ticket == null)
                throw new UserFriendlyException("Ticket not found!");
            return ObjectMapper.Map<TicketDto>(ticket);
        }

        //// Write get all method to get all tickets by national id
        public async Task<List<TicketDto>> GetByNationalId(string nationalId)
        {
            var tickets = _ticketRepository.GetAllList().Where(x => x.NationalId == nationalId);

            return ObjectMapper.Map<List<TicketDto>>(tickets);
        }

        public async Task<List<TicketDto>> GetAllAsync()
        {
            var tickets = await _ticketRepository.GetAllListAsync();
            return ObjectMapper.Map<List<TicketDto>>(tickets);
        }

        public async Task<TicketDto> CreateAsync(TicketDto input)
        {
            try
            {
                var ticket = ObjectMapper.Map<TicketDto>(input);
                ticket.NationalId = input.NationalId;
                ticket.TicketType = input.TicketType;
                ticket.Points = input.Points;
                ticket.Amount = input.Amount;

                var user = ObjectMapper.Map<Ticket>(input);
                await _ticketRepository.InsertAsync(user);
                CurrentUnitOfWork.SaveChanges();
                return ObjectMapper.Map<TicketDto>(ticket);
            }
            catch (Exception ex)
            {
                
                throw new InvalidOperationException("Could not create because of this reason "+ex.Message);
            }
        }


        Task<TicketDto> ITicketAppService.UpdateAsync(TicketDto input)
        {
            throw new NotImplementedException();
        }

    }
}
