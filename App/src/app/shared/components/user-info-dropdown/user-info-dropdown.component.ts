import { Component, Input } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-user-info-dropdown',
    templateUrl: './user-info-dropdown.component.html',
    styleUrls: ['./user-info-dropdown.component.scss']
})
export class UserInfoDropdownComponent {
    @Input() loggedUser: User

    public arrowState = false

    constructor (private auth: AuthService) {}

    logout(): void {
      this.auth.logout();
    }

    onDropdownChange(isVisible: boolean) {
      this.arrowState = isVisible
    }
}