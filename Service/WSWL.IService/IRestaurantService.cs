using WSWL.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WSWL.IService
{
    public interface IRestaurantService
    {
        Task<IList<Restaurant>> GetAll();
        Task<Restaurant> GetById(int id);
        Task<Restaurant> GetByName(string name);
        Task<Restaurant> Insert(Restaurant restaurant);
        Task<Restaurant> Update(Restaurant restaurant);
        void Delete(int id);
    }
}
