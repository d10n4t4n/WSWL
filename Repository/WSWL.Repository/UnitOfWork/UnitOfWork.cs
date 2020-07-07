using WSWL.IRepository.IUnitOfWork;
using WSWL.Repository.Context;
using Microsoft.EntityFrameworkCore;

namespace WSWL.Repository.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        public DbContext Context { get; }

        public UnitOfWork(RepositoryContext context)
        {
            Context = context;
        }

        public void Commit()
        {
            Context.SaveChanges();
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
