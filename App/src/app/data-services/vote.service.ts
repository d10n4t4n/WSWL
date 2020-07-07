import { Injectable } from '@angular/core';
import { Endpoints } from '../core/constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';

@Injectable({
	providedIn: 'root',
})
export class VoteService {
	private url = Endpoints.vote;

	constructor(private httpClient: HttpClient) {}

	getAllByUserId(userId: number): Observable<Vote[]> {
		return this.httpClient.get<Vote[]>(this.url.getAllByUserId + userId);
	}

	post(vote: Vote): Observable<Vote> {
		return this.httpClient.post<Vote>(this.url.post, vote);
	}
}
