using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WSWL.IRepository.Base
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<IQueryable<T>> GetAll();
        Task<IQueryable<T>> GetByCondition(Expression<Func<T, bool>> expression);
        Task<T> FirstOrDefault(Expression<Func<T, bool>> expression);
        Task<T> Insert(T entity);
        Task<T> Update(T entity);
        void Delete(T entity);
    }
}
