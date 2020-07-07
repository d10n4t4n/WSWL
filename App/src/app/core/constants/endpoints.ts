import { environment } from 'src/environments/environment';

export const Endpoints = {
	auth: {
		login: environment.api_base + 'auth/login',
	},
	poll: {
		getAll: environment.api_base + 'poll/GetAll',
		getById: environment.api_base + 'poll/',
		post: environment.api_base + 'poll/post',
		delete: environment.api_base + 'poll/',
	},
	restaurant: {
		getAll: environment.api_base + 'restaurant/GetAll',
		getById: environment.api_base + 'restaurant/',
		getByName: environment.api_base + 'restaurant/getByName/',
		post: environment.api_base + 'restaurant/post',
		delete: environment.api_base + 'restaurant/',
	},
	user: {
		getAll: environment.api_base + 'user/GetAll',
		getById: environment.api_base + 'user/',
		getByEmail: environment.api_base + 'user/getByEmail/',
		post: environment.api_base + 'user/post',
		delete: environment.api_base + 'user/',
	},
	vote: {
		getAllByUserId: environment.api_base + 'vote/GetAllByUserId/',
		post: environment.api_base + 'vote/post',
	},
};
