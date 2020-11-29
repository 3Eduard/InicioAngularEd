import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import en from '@angular/common/locales/en';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import {ModalModule} from './modal/modal.module';
import {LayoutModule} from './layout/layout.module';


registerLocaleData(en);

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
    NzCarouselModule,
    LayoutModule,
    ModalModule,

  ],
  declarations: [



  ],
  exports: [
    LayoutModule,
    ModalModule,
  ],

  providers: [],

})
export class SharedModule {}
