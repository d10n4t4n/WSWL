import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Login } from 'src/app/models/login.model';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	public url = Endpoints.auth.login;

	constructor(private http: HttpClient, private router: Router) {
		this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	login(login: Login) {
		return this.http.post(this.url, { email: login.email, password: login.password }).pipe(
			map((user) => {
				localStorage.setItem('currentUser', JSON.stringify(user));
				this.currentUserSubject.next(user as User);
				return user;
			})
		);
	}

	logout() {
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
		this.router.navigate(['/login']);
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value;
	}
}
