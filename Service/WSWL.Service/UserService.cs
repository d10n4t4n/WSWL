using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSWL.Domain;
using WSWL.IRepository;
using WSWL.IRepository.IUnitOfWork;
using WSWL.IService;

namespace WSWL.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _uow;

        public UserService(IUnitOfWork uow, IUserRepository usuarioRepository)
        {
            _uow = uow;
            _userRepository = usuarioRepository;
        }

        public async Task<IList<User>> GetAll()
        {
            var users = (await _userRepository.GetAll()).ToList();
            return users;
        }

        public async Task<User> GetById(int id)
        {
            return await _userRepository.FirstOrDefault(x => x.Id == id);
        }

        public async Task<User> GetByEmail(string email)
        {
            try
            {
                return await _userRepository.FirstOrDefault(x => x.Email == email);
            }
            catch
            {
                throw new Exception($"O Usuário com o email '{email}' não foi encontrado");
            }
        }

        public async Task<User> Insert(User user)
        {
            try
            {
                var res = await _userRepository.Insert(user);
                _uow.Commit();

                return res;
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao processar a requisição. Ex.: {ex}");
            }
        }

        public async Task<User> Update(User user)
        {
            try
            {
                var res = await _userRepository.Update(user);
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
                _userRepository.Delete(new User { Id = id });
                _uow.Commit();
            }
            catch (Exception ex)
            {
                throw new Exception($"Ocorreu um erro ao deletar o usuário. Ex.: {ex}");
            }
        }
    }
}
