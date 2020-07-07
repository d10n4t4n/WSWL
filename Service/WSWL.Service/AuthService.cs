using WSWL.Domain;
using WSWL.Domain.DTO;
using WSWL.IRepository;
using WSWL.IService;
using System;
using System.Threading.Tasks;

namespace WSWL.Service
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> Login(LoginDTO login)
        {
            try
            {
                var user = await _userRepository.FirstOrDefault(x => x.Email == login.Email && x.Password == login.Password);

                return user;  
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
