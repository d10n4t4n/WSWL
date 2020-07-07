using System;
using System.Collections.Generic;

namespace WSWL.Domain
{
    public class Restaurant
    {
        public Restaurant()
        {
            Polls = new HashSet<Poll>();
            PollCandidates = new HashSet<PollCandidates>();
            Votes = new HashSet<Vote>();
        }

        public int? Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool Status { get; set; }
        public DateTime? WinDate { get; set; }

        public virtual ICollection<Poll> Polls { get; set; }
        public virtual ICollection<PollCandidates> PollCandidates { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }
    }
}
