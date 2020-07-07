using System.Collections.Generic;
using System.Threading.Tasks;
using WSWL.Domain;

namespace WSWL.IService
{
    public interface IUserService
    {
        Task<IList<User>> GetAll();
        Task<User> GetById(int id);
        Task<User> GetByEmail(string email);
        Task<User> Insert(User user);
        Task<User> Update(User user);
        void Delete(int id);
    }
}
