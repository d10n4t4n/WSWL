using WSWL.Domain;
using WSWL.IRepository;
using WSWL.IRepository.IUnitOfWork;
using WSWL.Repository.Base;

namespace WSWL.Repository
{
    public class VoteRepository : RepositoryBase<Vote>, IVoteRepository
    {
        public VoteRepository(IUnitOfWork unit) : base(unit) { }

    }
}
