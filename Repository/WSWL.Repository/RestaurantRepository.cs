using WSWL.Domain;
using WSWL.IRepository;
using WSWL.IRepository.IUnitOfWork;
using WSWL.Repository.Base;
using System.Threading.Tasks;

namespace WSWL.Repository
{
    public class RestaurantRepository : RepositoryBase<Restaurant>, IRestaurantRepository
    {
        public RestaurantRepository(IUnitOfWork unit) : base(unit) { }
        public async Task<Restaurant> GetByName(string name)
        {
            return await FirstOrDefault(x => x.Name == name);
        }
    }
}
