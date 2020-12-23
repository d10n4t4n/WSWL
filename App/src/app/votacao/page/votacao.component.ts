import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantService } from 'src/app/data-services/restaurant.service';
import { VoteService } from 'src/app/data-services/vote.service';
import { Vote } from 'src/app/models/vote.model';
import { Poll } from 'src/app/models/poll.model';
import moment from 'moment';
import { User } from 'src/app/models/user.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
	selector: 'app-votacao',
	templateUrl: './votacao.component.html',
	styleUrls: ['./votacao.component.scss'],
})
export class VotacaoComponent implements OnInit {
	public candidates: Restaurant[];
	public filteredCandidates: Restaurant[] = [];
	public userVote = new Vote();
	public searchTerm = '';
	public loadingCandidates = false;
	public currentPoll: Poll;
	public today = moment(new Date()).format('YYYY-MM-DD');
	public currentUser: User;
	public canVote = true;

	constructor(
		private restaurantService: RestaurantService,
		private voteService: VoteService,
		private modalService: NzModalService,
		private messageService: NzMessageService
	) { }

	ngOnInit(): void {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.loadCandidates();
		this.currentPoll = JSON.parse(localStorage.getItem('currentPoll'));
		this.voteService.getAllByUserId(this.currentUser.id).subscribe((votes) => {
			this.canVote = votes.every((vote) => moment(vote.voteDate).diff(this.today) === 0);
		});
	}

	loadCandidates(): void {
		this.loadingCandidates = true;
		this.restaurantService.getAll().subscribe(
			(candidates) => {
				this.candidates = candidates;
				this.candidates = this.candidates.filter((v) => moment(this.today).diff(v.winDate, 'days') > 7 || v.winDate === null);
				this.filteredCandidates = candidates;
				this.loadingCandidates = false;
			},
			() => {
				this.loadingCandidates = false;
			}
		);
	}

	vote(candidate: Restaurant): void {
		this.modalService.confirm({
			nzTitle: 'Confirmação',
			nzOkText: 'Sim',
			nzCancelText: 'Não',
			nzContent: `Tem certeza que deseja votar no restaurante ${candidate.name}?`,
			nzOnOk: () =>
				new Promise((resolve) => {
					this.userVote.candidateId = candidate.id;
					this.userVote.pollId = this.currentPoll.id;
					this.userVote.userId = this.currentUser.id;
					this.voteService.post(this.userVote).subscribe((res) => {
						if (res) {
							this.canVote = false;
							resolve(true);
							this.messageService.success(`Voto registrado com sucesso!`);
						}
					});
				}),
		});
	}

	searchCandidate(keyword: string): void {
		this.candidates = this.filteredCandidates.filter((candidate) => {
			return (
				(candidate.name ? candidate.name : '').toLowerCase().includes(keyword.toLowerCase()) ||
				(candidate.address ? candidate.address : '').toLowerCase().includes(keyword.toLowerCase()) ||
				(candidate.phone ? candidate.phone : '').toString().includes(keyword.toLowerCase())
			);
		});
	}
}
