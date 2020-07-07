using WSWL.IRepository.Base;
using WSWL.IRepository.IUnitOfWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WSWL.Repository.Base
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        private readonly IUnitOfWork _unitOfWork;
        private DbSet<T> _entities;

        public RepositoryBase(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _unitOfWork.Context.ChangeTracker.LazyLoadingEnabled = false;
            _entities = _unitOfWork.Context.Set<T>();
        }
        public async Task<IQueryable<T>> GetAll()
        {
            try
            {
                return _entities;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<IQueryable<T>> GetByCondition(Expression<Func<T, bool>> expression)
        {
            return _entities.Where(expression);
        }     

        public async Task<T> FirstOrDefault(Expression<Func<T, bool>> expression)
        {
            return await _entities.AsNoTracking().FirstOrDefaultAsync(expression);
        }

        public async Task<T> Insert(T entity)
        {
            await _entities.AddAsync(entity);
            return entity;
        }

        public async Task<T> Update(T entity)
        {
            _unitOfWork.Context.Entry(entity).State = EntityState.Modified;
            _entities.Update(entity);

            return entity;
        }

        public void Delete(T entity)
        {
            _entities.Remove(entity);
        }
    }
}
