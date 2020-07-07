using WSWL.Domain;
using WSWL.IService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WSWL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly IPollService _pollService;

        public PollController(IPollService pollService)
        {
            _pollService = pollService;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                var polls = (await _pollService.GetAll());
                return Ok(polls);
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar as enquetes. Erro: {ex}");
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _pollService.GetById(id));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar a enquete. Erro: {ex}");
            }
        } 

        [HttpPost]
        [Route("post")]
        public async Task<ActionResult> Post([FromBody] Poll poll)
        {
            try
            {
                if (poll.Id.HasValue)
                {
                    return Ok(await _pollService.Update(poll));
                }
                else
                {
                    return Ok(await _pollService.Insert(poll));
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao {(poll.Id == 0 ? "Inserir" : "Editar")} a enquete. Erro: {ex}");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _pollService.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar a enquete. Erro: {ex}");
            }
        }
    }
}