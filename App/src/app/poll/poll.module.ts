import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './page/poll.component';
import { AntdModule } from '../antd.module';
import { HighlightedTextComponent } from '../core/utils/highlighted-text/highlighted-text.component';

@NgModule({
	declarations: [PollComponent, HighlightedTextComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, PollRoutingModule, AntdModule],
})
export class PollModule {}
