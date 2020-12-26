import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollComponent } from './page/poll.component';

const routes: Routes = [
	{
		path: '',
		component: PollComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PollRoutingModule {}
