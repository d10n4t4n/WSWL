import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll.model';
import { PollService } from 'src/app/data-services/poll.service';

@Component({
	selector: 'app-resultados',
	templateUrl: './resultados.component.html',
	styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
	public polls: Poll[];
	public loadingPolls = false;

	constructor(private pollService: PollService) {}

	ngOnInit(): void {
		this.getPolls();
	}

	getPolls(): void {
		this.loadingPolls = true;
		this.pollService.getAll().subscribe(
			(polls: Poll[]) => {
				this.polls = polls;
				this.loadingPolls = false;
			},
			(err) => {
				this.loadingPolls = false;
			}
		);
	}

	onPollSelect(poll: Poll): void {
		console.log(poll);
	}
}
