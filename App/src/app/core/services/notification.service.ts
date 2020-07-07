import { Injectable, NgZone } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	constructor(private notification: NzNotificationService, private zone: NgZone) {}

	showError(message: string): void {
		this.zone.run(() => {
			this.notification.error('Atenção', message, { nzDuration: 10000 });
		});
	}
}
