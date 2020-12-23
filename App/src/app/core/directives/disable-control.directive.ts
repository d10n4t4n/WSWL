import { NgControl } from '@angular/forms';
import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[disableControl]',
})
export class DisableControlDirective implements OnChanges {
	@Input('disableControl') disableCtrl;

	constructor(private ngControl: NgControl) {}

	ngOnChanges(changes) {
		if (changes['disableControl']) {
			const action = this.disableCtrl ? 'disable' : 'enable';

			this.ngControl.control[action]();
		}
	}
}
