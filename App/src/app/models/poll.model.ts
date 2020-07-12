import { Restaurant } from './restaurant.model';
import { Vote } from './vote.model';
import { StatusEnum } from './status.enum';

export class Poll {
	id: number;
	startDate: Date | string;
	endDate: Date | string;
	resultId: number;
	status: StatusEnum;
	result: Restaurant;
	votes: Vote[];

	constructor(init?: Partial<Poll>) {
		if (init) {
			Object.assign(this, init);

			if (init.result) {
				this.result = new Restaurant(init.result);
			}

			if (init.votes) {
				this.votes = init.votes.map((v) => new Vote(v));
			}
		}
	}
}
