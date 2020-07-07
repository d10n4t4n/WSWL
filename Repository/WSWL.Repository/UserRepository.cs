using System.Threading.Tasks;
using WSWL.Domain;
using WSWL.IRepository;
using WSWL.IRepository.IUnitOfWork;
using WSWL.Repository.Base;

namespace WSWL.Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(IUnitOfWork unit) : base(unit) { }

        public async Task<User> GetByEmail(string email)
        {
            return await FirstOrDefault(x => x.Email == email);
        }
    }
}
