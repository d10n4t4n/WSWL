import { Restaurant } from './restaurant.model';
import { Poll } from './poll.model';

export class PollCandidates {
	id: number;
	candidateId: number;
	pollId: number;
	candidate: Restaurant;
	poll: Poll;

	constructor(init?: Partial<PollCandidates>) {
		if (init) {
			Object.assign(this, init);

			if (init.candidate) {
				this.candidate = new Restaurant(init.candidate);
			}

			if (init.poll) {
				this.poll = new Poll(init.poll);
			}
		}
	}
}
