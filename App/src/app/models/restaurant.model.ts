import { Poll } from './poll.model';
import { Vote } from './vote.model';
import { PollCandidates } from './pollCandidates.model';

export class Restaurant {
	id: number;
	name: string;
	address: string;
	phone: string;
	status: boolean;
	winDate: Date | string;
	polls: Poll[];
	pollCandidates: PollCandidates[];
	votes: Vote[];

	constructor(init?: Partial<Restaurant>) {
		if (init) {
			Object.assign(this, init);

			if (init.polls) {
				this.polls = init.polls.map((v) => new Poll(v));
			}

			if (init.pollCandidates) {
				this.pollCandidates = init.pollCandidates.map((v) => new PollCandidates(v));
			}

			if (init.votes) {
				this.votes = init.votes.map((v) => new Vote(v));
			}
		}
	}
}
