using System;
using System.Collections.Generic;

namespace WSWL.Domain
{
    public class Poll
    {
        public Poll()
        {
            PollCandidates = new HashSet<PollCandidates>();
            Votes = new HashSet<Vote>();
        }

        public int? Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? ResultId { get; set; }
        public int? Status { get; set; }

        public virtual Restaurant Result { get; set; }
        public virtual ICollection<PollCandidates> PollCandidates { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }
    }
}
