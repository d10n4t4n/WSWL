using WSWL.Domain;
using WSWL.IService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WSWL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : ControllerBase
    {
        private readonly IVoteService _voteService;

        public VoteController(IVoteService voteService)
        {
            _voteService = voteService;
        }

        [HttpGet]
        [Route("GetAllByUserId/{userId}")]
        public async Task<ActionResult> GetAllByUserId(int userId)
        {
            try
            {
                return Ok(await _voteService.GetAllByUserId(userId));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao buscar os votos do usuário. Erro: {ex}");
            }
        }        

        [HttpPost]
        [Route("post")]
        public async Task<ActionResult> Post([FromBody] Vote vote)
        {
            try
            {
                return Ok(await _voteService.Insert(vote));
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao registrar o voto. Erro: {ex}");
            }
        }
        
    }
}