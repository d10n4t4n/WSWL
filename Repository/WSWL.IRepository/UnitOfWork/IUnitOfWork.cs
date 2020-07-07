using Microsoft.EntityFrameworkCore;
using System;

namespace WSWL.IRepository.IUnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        DbContext Context { get; }
        void Commit();
    }
}
