using WSWL.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WSWL.Mapping
{
    public class VoteConfiguration : IEntityTypeConfiguration<Vote>
    {
        public void Configure(EntityTypeBuilder<Vote> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.Property(e => e.VoteDate).HasColumnName("vote_date");

            entity.Property(e => e.PollId).HasColumnName("poll_id");

            entity.Property(e => e.CandidateId).HasColumnName("candidate_id");

            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Candidate)
                .WithMany(p => p.Votes)
                .HasForeignKey(d => d.CandidateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_vote_restaurant");

            entity.HasOne(d => d.Poll)
                .WithMany(p => p.Votes)
                .HasForeignKey(d => d.PollId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_vote_poll");

            entity.HasOne(d => d.User)
                .WithMany(p => p.Votes)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_vote_user");
        }
    }
}
