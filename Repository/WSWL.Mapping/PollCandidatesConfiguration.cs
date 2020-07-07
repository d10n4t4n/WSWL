using WSWL.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WSWL.Mapping
{
    public class PollCandidatesConfiguration : IEntityTypeConfiguration<PollCandidates>
    {
        public void Configure(EntityTypeBuilder<PollCandidates> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.Property(e => e.CandidateId).HasColumnName("candidate_id");

            entity.Property(e => e.PollId).HasColumnName("poll_id");

            entity.HasOne(d => d.Candidate)
                  .WithMany(p => p.PollCandidates)
                  .HasForeignKey(d => d.CandidateId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_poll_candidates_restaurant");

            entity.HasOne(d => d.Poll)
                  .WithMany(p => p.PollCandidates)
                  .HasForeignKey(d => d.PollId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_poll_candidates_poll");
        }
    }
}
