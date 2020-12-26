import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import enGB from '@angular/common/locales/en-GB';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {  en_GB, NzI18nModule, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDividerModule } from 'ng-zorro-antd/divider';

registerLocaleData(enGB);

@NgModule({
	declarations: [],
	exports: [
		NzButtonModule,
		NzGridModule,
		NzI18nModule,
		NzIconModule,
		NzInputModule,
		NzMenuModule,
		NzInputNumberModule,
		NzLayoutModule,
		NzMessageModule,
		NzModalModule,
		NzNotificationModule,
		NzPaginationModule,
		NzPopconfirmModule,
		NzSpinModule,
		NzTableModule,
		NzToolTipModule,
		NzDropDownModule,
		NzAvatarModule,
		NzCardModule,
		NzSkeletonModule,
		NzDividerModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_GB }],
})
export class AntdModule { }
