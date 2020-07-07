import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error.service';
import { LoggingService } from '../services/logging.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
	constructor(private injector: Injector) {}

	handleError(error: Error | HttpErrorResponse) {
		const errorService = this.injector.get(ErrorService);
		const notifier = this.injector.get(NotificationService);

		let message = '';
		if (error instanceof HttpErrorResponse) {
			// Server error
			message = errorService.getServerErrorMessage(error);
			notifier.showError(message);
		}
		console.error(error);
	}
}
