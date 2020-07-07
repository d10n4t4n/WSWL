using WSWL.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WSWL.Mapping
{
    public class PollConfiguration : IEntityTypeConfiguration<Poll>
    {
        public void Configure(EntityTypeBuilder<Poll> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.Property(e => e.StartDate).HasColumnName("start_date");

            entity.Property(e => e.EndDate).HasColumnName("end_date");

            entity.Property(e => e.ResultId).HasColumnName("result_id");

            entity.HasOne(d => d.Result)
                  .WithMany(p => p.Polls)
                  .HasForeignKey(d => d.ResultId)
                  .HasConstraintName("FK_poll_restaurant");
        }
    }
}
