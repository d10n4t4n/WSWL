using WSWL.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WSWL.IService
{
    public interface IPollService
    {
        Task<IList<Poll>> GetAll();
        Task<Poll> GetById(int id);
        Task<Poll> Insert(Poll poll);
        Task<Poll> Update(Poll poll);
        void Delete(int id);
    }
}
