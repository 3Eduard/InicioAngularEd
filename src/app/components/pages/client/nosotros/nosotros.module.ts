import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NosotrosComponent} from './nosotros.component';
import {NosotrosPageRoutingModule} from './nosotros-routing.module';
import {NgZorroAntdModule, NzSelectModule} from 'ng-zorro-antd';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        NosotrosPageRoutingModule,
        LayoutModule,
        NzSelectModule,
        NgZorroAntdModule,
    ],
  declarations: [NosotrosComponent],
  exports: []

})
export class NosotrosPageModule {}
