import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'highlighted-text',
	templateUrl: './highlighted-text.component.html',
	styleUrls: ['./highlighted-text.component.scss'],
})
export class HighlightedTextComponent implements OnChanges {
	@Input() needle: String;
	@Input() haystack: String;
	public matched;
	public unmatched;

	ngOnChanges(changes) {
		this.match();
	}

	match() {
		this.matched = undefined;
		this.unmatched = this.haystack;
		if (this.needle && this.haystack) {
			const needle = String(this.needle);
			const haystack = String(this.haystack);
			const startIndex = haystack.toLowerCase().indexOf(needle.toLowerCase());
			if (startIndex !== -1) {
				const endLength = needle.length;
				this.matched = haystack.substr(startIndex, endLength);
				this.unmatched = haystack.substr(needle.length);
			}
		}
	}
}
