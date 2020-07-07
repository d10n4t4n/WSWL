import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './page/resultados.component';
import { AntdModule } from '../antd.module';

@NgModule({
	declarations: [ResultadosComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, ResultadosRoutingModule, AntdModule],
})
export class ResultadosModule {}
