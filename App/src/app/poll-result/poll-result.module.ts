import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PollResultRoutingModule } from './poll-result-routing.module';
import { PollResultComponent } from './page/poll-result.component';
import { AntdModule } from '../antd.module';

@NgModule({
	declarations: [PollResultComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, PollResultRoutingModule, AntdModule],
})
export class PollResultModule {}
