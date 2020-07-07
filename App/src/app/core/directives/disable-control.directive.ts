import { NgControl, NgModel, FormControlDirective, FormControlName } from '@angular/forms';
import { Directive, Input, Optional, OnChanges } from '@angular/core';

@Directive({
	selector: '[disableControl]',
})
export class DisableControlDirective implements OnChanges {
	@Input('disableControl') disableCtrl;

	constructor(private ngControl: NgControl) {}

	// @Input() set disableControl(condition: boolean) {
	// 	const action = condition ? 'disable' : 'enable';
	// 	this.ngControl.control[action]();
	// }

	ngOnChanges(changes) {
		if (changes['disableControl']) {
			const action = this.disableCtrl ? 'disable' : 'enable';

			this.ngControl.control[action]();
		}
	}
	// constructor(
	// 	@Optional() ngModel: NgModel,
	// 	@Optional() formControlDirective: FormControlDirective,
	// 	@Optional() formControlName: FormControlName,
	// 	private ngControl: NgControl
	// ) {
	// 	this.ngControl = ngModel || formControlDirective || formControlName;
	// }
}
