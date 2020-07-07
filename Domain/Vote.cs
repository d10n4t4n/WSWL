using System;
using System.Collections.Generic;

namespace WSWL.Domain
{
    public class Vote
    {
        public int Id { get; set; }
        public DateTime? VoteDate { get; set; }
        public int PollId { get; set; }
        public int CandidateId { get; set; }
        public int UserId { get; set; }

        public virtual Restaurant Candidate { get; set; }
        public virtual Poll Poll { get; set; }
        public virtual User User { get; set; }
    }
}
