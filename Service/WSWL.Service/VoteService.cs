using WSWL.IRepository.IUnitOfWork;
using WSWL.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSWL.IRepository;
using WSWL.Domain;

namespace WSWL.Service
{
    public class VoteService : IVoteService
    {
        private readonly IVoteRepository _voteRepository;
        private readonly IUnitOfWork _uow;

        public VoteService(IUnitOfWork uow, IVoteRepository voteRepository)
        {
            _uow = uow;
            _voteRepository = voteRepository;
        }

        public async Task<IList<Vote>> GetAllByUserId(int userId)
        {
            var votes = (await _voteRepository.GetByCondition(x => x.UserId == userId)).ToList();
            return votes;
        }        

        public async Task<Vote> Insert(Vote vote)
        {
            try
            {
                vote.VoteDate = DateTime.Now;
                var res = await _voteRepository.Insert(vote);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }       
    }
}
