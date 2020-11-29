import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {ProductoComponent} from './producto.component';
import {ProductoPageRoutingModule} from './producto-routing.module';
import {NgZorroAntdModule, NzAvatarModule, NzCardModule, NzGridModule, NzIconModule} from 'ng-zorro-antd';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ProductoPageRoutingModule,
    LayoutModule,
    NzIconModule,
    NzAvatarModule,
    NzCardModule,
    NzGridModule,
    NgZorroAntdModule,

  ],
  declarations: [ProductoComponent],
  exports: []

})
export class ProductoPageModule {}




