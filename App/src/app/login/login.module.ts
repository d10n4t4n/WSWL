import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './page/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AntdModule } from '../antd.module';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule, AntdModule],
})
export class LoginModule {}
