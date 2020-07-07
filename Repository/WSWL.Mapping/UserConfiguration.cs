using WSWL.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WSWL.Mapping
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedOnAdd();

            entity.Property(e => e.FirstName).HasColumnName("first_name").IsRequired();

            entity.Property(e => e.LastName).HasColumnName("last_name");

            entity.Property(e => e.Role).HasMaxLength(50);

            entity.Property(e => e.Email).IsRequired();            

            entity.Property(e => e.Password).IsRequired();
            
        }
    }
}
