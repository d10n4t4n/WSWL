import { Restaurant } from './restaurant.model';
import { Vote } from './vote.model';
import { PollCandidates } from './pollCandidates.model';

export class Poll {
	id: number;
	startDate: Date | string;
	endDate: Date | string;
	resultId: number;
	result: Restaurant;
	pollCandidates: PollCandidates[];
	votes: Vote[];

	constructor(init?: Partial<Poll>) {
		if (init) {
			Object.assign(this, init);

			if (init.result) {
				this.result = new Restaurant(init.result);
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
