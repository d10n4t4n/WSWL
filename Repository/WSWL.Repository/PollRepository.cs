using WSWL.Domain;
using WSWL.IRepository;
using WSWL.IRepository.IUnitOfWork;
using WSWL.Repository.Base;

namespace WSWL.Repository
{
    public class PollRepository : RepositoryBase<Poll>, IPollRepository
    {
        public PollRepository(IUnitOfWork unit) : base(unit) { }
       
    }
}
