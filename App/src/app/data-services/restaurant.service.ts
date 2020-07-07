import { Injectable } from '@angular/core';
import { Endpoints } from '../core/constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
	providedIn: 'root',
})
export class RestaurantService {
	private url = Endpoints.restaurant;

	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Restaurant[]> {
		return this.httpClient.get<Restaurant[]>(this.url.getAll);
	}

	getById(id: number): Observable<Restaurant> {
		return this.httpClient.get<Restaurant>(this.url.getById + id);
	}

	getByName(name: string): Observable<Restaurant> {
		return this.httpClient.get<Restaurant>(this.url.getByName + name);
	}

	post(restaurant: Restaurant): Observable<Restaurant> {
		return this.httpClient.post<Restaurant>(this.url.post, restaurant);
	}

	delete(id: number) {
		return this.httpClient.delete(this.url.delete + id);
	}
}
