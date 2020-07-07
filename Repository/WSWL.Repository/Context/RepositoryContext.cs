using WSWL.Domain;
using WSWL.Mapping;
using Microsoft.EntityFrameworkCore;

namespace WSWL.Repository.Context
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext() { }

        public string ConnectionString()
        {
            return this.Database.GetDbConnection().ConnectionString;
        }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

        public virtual DbSet<Poll> Poll { get; set; }
        public virtual DbSet<PollCandidates> PollCandidates { get; set; }
        public virtual DbSet<Restaurant> Restaurant { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Vote> Vote { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new PollConfiguration());
            modelBuilder.ApplyConfiguration(new RestaurantConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new VoteConfiguration());
            modelBuilder.ApplyConfiguration(new PollCandidatesConfiguration());
        }
    }
}
