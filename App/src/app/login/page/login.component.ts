import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;
	error: string;
	anoAtual = new Date().getFullYear();
	passwordVisible = false;

	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private auth: AuthService) {}

	ngOnInit() {
		this.formInit();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/poll';
	}

	formInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit(): void {
		this.submitted = true;
		this.loading = true;
		if (this.loginForm.invalid) {
			this.loading = false;
			return;
		}

		this.auth.login(this.loginForm.value).subscribe(
			(data) => {
				this.router.navigate([this.returnUrl]);
				this.loading = false;
			},
			(error) => {
				console.log(error);
				this.loading = false;
			}
		);
	}
}
