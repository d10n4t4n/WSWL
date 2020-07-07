namespace WSWL.Domain
{
    public class PollCandidates
    {
        public int Id { get; set; }
        public int CandidateId { get; set; }
        public int PollId { get; set; }

        public virtual Restaurant Candidate { get; set; }
        public virtual Poll Poll { get; set; }
    }
}
