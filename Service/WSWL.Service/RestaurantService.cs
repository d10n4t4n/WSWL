using WSWL.IRepository.IUnitOfWork;
using WSWL.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSWL.IRepository;
using WSWL.Domain;

namespace WSWL.Service
{
    public class RestaurantService : IRestaurantService
    {
        private readonly IRestaurantRepository _restaurantRepository;
        private readonly IUnitOfWork _uow;

        public RestaurantService(IUnitOfWork uow, IRestaurantRepository restaurantRepository)
        {
            _uow = uow;
            _restaurantRepository = restaurantRepository;
        }

        public async Task<IList<Restaurant>> GetAll()
        {
            var restaurants = (await _restaurantRepository.GetAll()).ToList();       

            return restaurants;
        }

        public async Task<Restaurant> GetById(int id)
        {
            return await _restaurantRepository.FirstOrDefault(x => x.Id == id);
        }

        public async Task<Restaurant> GetByName(string name)
        {
            try
            {
                return await _restaurantRepository.FirstOrDefault(x => x.Name == name);
            }
            catch
            {
                throw new Exception($"O Restaurante com o nome '{name}' não foi encontrado");
            }
        }

        public async Task<Restaurant> Insert(Restaurant restaurant)
        {
            try
            {
                var res = await _restaurantRepository.Insert(restaurant);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }

        public async Task<Restaurant> Update(Restaurant restaurant)
        {
            try
            {
                var res = await _restaurantRepository.Update(restaurant);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }

        public void Delete(int id)
        {
            try
            {
                _restaurantRepository.Delete(new Restaurant { Id = id });
                _uow.Commit();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar o restaurante. Ex.: {ex}");
            }
        }
    }
}
