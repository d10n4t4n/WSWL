import { User } from './user.model';
import { Restaurant } from './restaurant.model';
import { Poll } from './poll.model';

export class Vote {
	id: number;
	voteDate?: string;
	pollId: number;
	candidateId: number;
	userId: number;
	candidate: Restaurant;
	poll: Poll;
	user: User;

	constructor(init?: Partial<Vote>) {
		if (init) {
			Object.assign(this, init);

			if (init.candidate) {
				this.candidate = new Restaurant(init.candidate);
			}

			if (init.poll) {
				this.poll = new Poll(init.poll);
			}

			if (init.user) {
				this.user = new User(init.user);
			}
		}
	}
}
