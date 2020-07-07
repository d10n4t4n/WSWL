import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Endpoints } from '../core/constants/endpoints';
import { Poll } from '../models/poll.model';

@Injectable({
	providedIn: 'root',
})
export class PollService {
	private url = Endpoints.poll;

	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Poll[]> {
		return this.httpClient.get<Poll[]>(this.url.getAll);
	}

	getById(id: number): Observable<Poll> {
		return this.httpClient.get<Poll>(this.url.getById + id);
	}

	post(poll: Poll): Observable<Poll> {
		return this.httpClient.post<Poll>(this.url.post, poll);
	}

	delete(id: number) {
		return this.httpClient.delete(this.url.delete + id);
	}
}
