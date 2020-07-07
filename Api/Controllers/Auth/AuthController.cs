using WSWL.Domain.DTO;
using WSWL.IService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WSWL.Api.Controllers.Login
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult> Login(LoginDTO login)
        {
            try
            {
                var user = (await _authService.Login(login));

                return Ok(user);
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao autenticar o usuário. Erro: {ex}");
            }
        }
    }
}