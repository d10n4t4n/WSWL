import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntdModule } from './antd.module';
import { AutoHeightTableDirective } from './core/directives/auto-height-table.directive';
import { httpInterceptorProviders } from './core/interceptor';
import { UserInfoDropdownComponent } from './shared/components/user-info-dropdown/user-info-dropdown.component';
import { LanguageSelectorComponent } from './shared/components/language-selector/language-selector.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		CommonModule,
		ReactiveFormsModule,
		AntdModule,
	],
	declarations: [LanguageSelectorComponent, UserInfoDropdownComponent, AppComponent, AutoHeightTableDirective],
	entryComponents: [],
	providers: [
		[httpInterceptorProviders],
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
