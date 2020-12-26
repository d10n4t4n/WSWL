import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '',
		redirectTo: 'poll',
		pathMatch: 'full',
		canActivate: [AuthGuard],
	},
	{
		path: 'poll',
		loadChildren: () => import('./poll/poll.module').then((m) => m.PollModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'poll-result',
		loadChildren: () => import('./poll-result/poll-result.module').then((m) => m.PollResultModule),
		canActivate: [AuthGuard],
	},
	{ path: '**', redirectTo: 'poll' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
