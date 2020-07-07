using WSWL.IRepository.IUnitOfWork;
using WSWL.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSWL.IRepository;
using WSWL.Domain;
using Microsoft.EntityFrameworkCore;

namespace WSWL.Service
{
    public class PollService : IPollService
    {
        private readonly IPollRepository _pollRepository;
        private readonly IUnitOfWork _uow;

        public PollService(IUnitOfWork uow, IPollRepository pollRepository)
        {
            _uow = uow;
            _pollRepository = pollRepository;
        }

        public async Task<IList<Poll>> GetAll()
        {
            var polls = await _pollRepository.GetAll();
            return await polls.Include(x => x.Result).Include(x => x.Votes).ThenInclude(x => x.User).AsNoTracking().ToListAsync();
        }

        public async Task<Poll> GetById(int id)
        {
            return await _pollRepository.FirstOrDefault(x => x.Id == id);
        }

        public async Task<Poll> Insert(Poll poll)
        {
            try
            {
                var res = await _pollRepository.Insert(poll);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }

        public async Task<Poll> Update(Poll poll)
        {
            try
            {
                var res = await _pollRepository.Update(poll);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }

        public void Delete(int id)
        {
            try
            {
                _pollRepository.Delete(new Poll { Id = id });
                _uow.Commit();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar a enquete. Ex.: {ex}");
            }
        }
    }
}
