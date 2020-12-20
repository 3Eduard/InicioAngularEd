import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {SharedModule} from '../../../shared/shared.module';

import {ProductosPageRoutingModule} from './productos-routing.module';
import {ProductosComponent} from './productos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    SharedModule,
    ProductosPageRoutingModule
  ],
  declarations: [ ProductosComponent, ],
  exports: []
})
export class ProductosPageModules {}
