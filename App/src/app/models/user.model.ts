import { Vote } from './vote.model';

export class User {
	id: number;
	firstName: string;
	lastName: string;
	role: string;
	email: string;
	password: string;
	status: boolean;
	votes: Vote[];

	constructor(init?: Partial<User>) {
		if (init) {
			Object.assign(this, init);

			if (init.votes) {
				this.votes = init.votes.map((v) => new Vote(v));
			}
		}
	}
}
