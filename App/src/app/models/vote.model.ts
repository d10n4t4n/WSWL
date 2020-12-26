export class Vote {
	id: number;
	voteDate?: string;
	pollId: number;
	candidateId: number;
	userId: number;

	constructor(init?: Partial<Vote>) {
		if (init) {
			Object.assign(this, init);
		}
	}
}
