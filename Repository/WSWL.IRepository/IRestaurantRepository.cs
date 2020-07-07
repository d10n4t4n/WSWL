using WSWL.Domain;
using WSWL.IRepository.Base;
using System.Threading.Tasks;

namespace WSWL.IRepository
{
    public interface IRestaurantRepository : IRepositoryBase<Restaurant>
    {
        Task<Restaurant> GetByName(string name);
    }
}
