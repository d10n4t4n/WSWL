import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, of, iif } from 'rxjs';
import { delay, retryWhen, concatMap } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const attempts = 0;
		return next
			.handle(request)
			.pipe(
				retryWhen((errors) =>
					errors.pipe(
						concatMap((err, n) => iif(() => n < attempts, of(err).pipe(delay((2 ** (n + 1) + Math.random() * 8) * 1000)), throwError(err)))
					)
				)
			);
	}
}
