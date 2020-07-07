using System.Collections.Generic;

namespace WSWL.Domain
{
    public class User
    {
        public User()
        {
            Votes = new HashSet<Vote>();
        }

        public int? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Status { get; set; }

        public virtual ICollection<Vote> Votes { get; set; }
    }
}
