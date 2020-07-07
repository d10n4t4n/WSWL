import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './core/interceptor/global-error-handler';
import { ServerErrorInterceptor } from './core/interceptor/server-error.interceptor';
import { AntdModule } from './antd.module';
import { AutoHeightTableDirective } from './core/directives/auto-height-table.directive';

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
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		{ provide: ErrorHandler, useClass: GlobalErrorHandler },
		{ provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
