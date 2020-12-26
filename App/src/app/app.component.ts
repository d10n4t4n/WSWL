import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { AuthService } from './core/services/auth.service';
import { User } from './models/user.model';
import { Poll } from './models/poll.model';
import { PollService } from './data-services/poll.service';
import moment from 'moment';
import _ from 'lodash';
import { RestaurantService } from './data-services/restaurant.service';
import { Restaurant } from './models/restaurant.model';
import { StatusEnum } from './models/status.enum';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public isCollapsed = false;
	public loading = false;
	public authenticated = false;
	public loggedUser: User;
	public polls: Poll[];
	public poll = new Poll();
	public today = moment(new Date()).format('YYYY-MM-DD');
	public statusEnum = StatusEnum;

	constructor(
		private nzConfigService: NzConfigService,
		private router: Router,
		private viewPortRuler: ViewportRuler,
		private auth: AuthService,
		private pollService: PollService,
		private restaurantService: RestaurantService
	) {
		this.nzConfigService.set('notification', {
			nzPlacement: 'bottomRight',
		});
	}

	ngOnInit() {
		this.handleUserState();
		// this.handleRouterLoading();
		this.handleScreenResize();
		this.handlePolls();
	}

	handleRouterLoading(): void {
		this.router.events.subscribe((event: RouterEvent): void => {
			switch (true) {
				case event instanceof NavigationStart: {
					this.loading = true;
					break;
				}
				case event instanceof NavigationEnd:
				case event instanceof NavigationCancel:
				case event instanceof NavigationError: {
					this.loading = false;
					if (this.router.url === '/login' && this.auth.isLoggedIn) {
						this.router.navigate(['']);
					}
					break;
				}
				default: {
					break;
				}
			}
		});
	}

	handleScreenResize(): void {
		window.innerWidth < 1366 ? (this.isCollapsed = true) : (this.isCollapsed = false);
		this.viewPortRuler.change(1000).subscribe(() => {
			window.innerWidth < 1366 ? (this.isCollapsed = true) : (this.isCollapsed = false);
		});
	}

	handleUserState(): void {
		this.auth.currentUser.subscribe((user) => {
			if (user) {
				this.authenticated = true;
				this.loggedUser = user;
			} else {
				this.authenticated = false;
				this.loggedUser = null;
			}
		});
	}

	handlePolls(): void {
		this.pollService.getAll().subscribe((polls) => {
			this.polls = polls;
			const allConcluded = this.polls.every(
				(poll) => poll.status === this.statusEnum.concluded || poll.status === this.statusEnum.inconclusive
			);
			if (allConcluded) {
				this.createPoll();
				this.startPoll(this.poll);
			} else {
				const currentPoll = this.polls.find((poll) => poll.status === this.statusEnum.inProgress);
				localStorage.removeItem('currentPoll');
				localStorage.setItem('currentPoll', JSON.stringify(currentPoll));
				if (moment(currentPoll.endDate).isBefore(new Date())) {
					if (currentPoll.votes.length > 0) {
						const winnerId = this.checkPollWinner(currentPoll);
						currentPoll.resultId = winnerId;
						currentPoll.status = this.statusEnum.concluded;
						const currentWinner = this.getPollWinner(winnerId);
						currentWinner.winDate = moment(`${this.today} 12:00:00`).format('YYYY-MM-DD HH:mm:ss');
						this.updateWinner(currentWinner);
					} else {
						currentPoll.status = this.statusEnum.inconclusive;
					}
					this.finishPoll(currentPoll);
					this.createPoll();
					this.startPoll(this.poll);
					localStorage.removeItem('currentPoll');
					localStorage.setItem('currentPoll', JSON.stringify(this.poll));
				}
			}
		});
	}

	createPoll(): void {
		// Cria uma nova poll com startDate de (today - 12:00:00) e endDate de (tomorrow - 11:50)
		this.poll.startDate = moment(`${this.today} 12:00:00`).format('YYYY-MM-DD HH:mm:ss');
		this.poll.endDate = moment(`${this.today}  11:50:00`).add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
		this.poll.status = this.statusEnum.inProgress;
	}

	checkPollWinner(poll: Poll): number {
		const candidateVotes = _.countBy(poll.votes.map((vote) => vote.candidateId));
		const sortedDesc = _.sortBy(_.toPairs(candidateVotes), 1).reverse();
		const pollWinnerId = parseInt(sortedDesc[0][0]);
		return pollWinnerId;
	}

	getPollWinner(restaurantId: number): Restaurant {
		let winner = new Restaurant();
		this.restaurantService.getById(restaurantId).subscribe((restaurant) => {
			if (restaurant) {
				winner = restaurant;
			}
		});
		return winner;
	}

	updateWinner(restaurant: Restaurant): void {
		this.restaurantService.post(restaurant).subscribe(
			() => { },
			(err) => {
				console.log(err);
			}
		);
	}

	startPoll(poll: Poll): void {
		this.pollService.post(poll).subscribe(
			(res) => { },
			(err) => {
				console.log(err);
			}
		);
	}

	finishPoll(poll: Poll): void {
		this.pollService.post(poll).subscribe(
			(res) => { },
			(err) => {
				console.log(err);
			}
		);
	}
}
