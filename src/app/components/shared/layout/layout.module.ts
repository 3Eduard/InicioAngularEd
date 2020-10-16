import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import en from '@angular/common/locales/en';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NavComponent } from './nav/nav.component';



registerLocaleData(en);

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
    NzCarouselModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],

  providers: [],

})
export class LayoutModule {}
