using WSWL.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WSWL.IService
{
    public interface IVoteService
    {
        Task<IList<Vote>> GetAllByUserId(int userId);
        Task<Vote> Insert(Vote vote);
    }
}
