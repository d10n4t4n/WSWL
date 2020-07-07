using WSWL.Domain;
using WSWL.IService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WSWL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly IRestaurantService _restaurantService;

        public RestaurantController(IRestaurantService restaurantService)
        {
            _restaurantService = restaurantService;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                return Ok(await _restaurantService.GetAll());
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar os restaurantes. Erro: {ex}");
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _restaurantService.GetById(id));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar o restaurante. Erro: {ex}");
            }
        }

        [HttpGet]
        [Route("getByName/{name}")]
        public async Task<ActionResult> GetByName(string name)
        {
            try
            {
                return Ok(await _restaurantService.GetByName(name));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar o restaurante. Erro: {ex}");
            }
        }

        [HttpPost]
        [Route("post")]
        public async Task<ActionResult> Post([FromBody] Restaurant restaurant)
        {
            try
            {
                if (restaurant.Id.HasValue)
                {                   
                    return Ok(await _restaurantService.Update(restaurant));
                }
                else
                {                    
                    return Ok(await _restaurantService.Insert(restaurant));
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao {(restaurant.Id == 0 ? "Inserir" : "Editar")} o restaurante. Erro: {ex}");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _restaurantService.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar o restaurante. Erro: {ex}");
            }
        }                
    }
}