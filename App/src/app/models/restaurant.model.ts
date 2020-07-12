import { Vote } from './vote.model';

export class Restaurant {
	id: number;
	name: string;
	address: string;
	phone: string;
	status: boolean;
	winDate: Date | string;
	votes: Vote[];

	constructor(init?: Partial<Restaurant>) {
		if (init) {
			Object.assign(this, init);

			if (init.votes) {
				this.votes = init.votes.map((v) => new Vote(v));
			}
		}
	}
}
