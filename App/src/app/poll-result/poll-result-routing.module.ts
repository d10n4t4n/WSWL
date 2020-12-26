import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollResultComponent } from './page/poll-result.component';

const routes: Routes = [
	{
		path: '',
		component: PollResultComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PollResultRoutingModule {}
