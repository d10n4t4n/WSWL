using System.Threading.Tasks;
using WSWL.Domain;
using WSWL.IRepository.Base;

namespace WSWL.IRepository
{
    public interface IUserRepository : IRepositoryBase<User> 
    {
        Task<User> GetByEmail(string email);
    }
}
