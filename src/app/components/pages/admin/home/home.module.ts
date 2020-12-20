import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {SharedModule} from '../../../shared/shared.module';

import {HomeComponent} from './home.component';
import {HomePageRoutingModule} from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [ HomeComponent, ],
  exports: []
})
export class HomePageModules {}
