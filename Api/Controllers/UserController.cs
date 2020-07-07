using WSWL.Domain;
using WSWL.IService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WSWL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                return Ok(await _userService.GetAll());
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar os usuários. Erro: {ex}");
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _userService.GetById(id));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar o usuário. Erro: {ex}");
            }
        }

        [HttpGet]
        [Route("getByEmail/{email}")]
        public async Task<ActionResult> GetByEmail(string email)
        {
            try
            {
                return Ok(await _userService.GetByEmail(email));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar o usuário. Erro: {ex}");
            }
        }

        [HttpPost]
        [Route("post")]
        public async Task<ActionResult> Post([FromBody] User user)
        {
            try
            {
                if (user.Id.HasValue)
                {
                    return Ok(await _userService.Update(user));
                }
                else
                {
                    return Ok(await _userService.Insert(user));
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao {(user.Id == 0 ? "Inserir" : "Editar")} o usuário. Erro: {ex}");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _userService.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar o usuário. Erro: {ex}");
            }
        }
    }
}