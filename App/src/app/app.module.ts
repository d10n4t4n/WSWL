import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntdModule } from './antd.module';
import { AutoHeightTableDirective } from './core/directives/auto-height-table.directive';
import { httpInterceptorProviders } from './core/interceptor';

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
	declarations: [AppComponent, AutoHeightTableDirective],
	entryComponents: [],
	providers: [
		[httpInterceptorProviders],
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
