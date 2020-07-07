import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VotacaoRoutingModule } from './votacao-routing.module';
import { VotacaoComponent } from './page/votacao.component';
import { AntdModule } from '../antd.module';
import { HighlightedTextComponent } from '../core/utils/highlighted-text/highlighted-text.component';

@NgModule({
	declarations: [VotacaoComponent, HighlightedTextComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, VotacaoRoutingModule, AntdModule],
})
export class VotacaoModule {}
