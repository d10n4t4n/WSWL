using WSWL.Domain;
using WSWL.Domain.DTO;
using System.Threading.Tasks;

namespace WSWL.IService
{
    public interface IAuthService
    {
        Task<User> Login(LoginDTO login);
    }
}
