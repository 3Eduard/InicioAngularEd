import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {PedidosComponent} from './pedidos.component';
import {PedidosPageRoutingModule} from './pedidos-routing.module';
import {NzAvatarModule, NzCardModule, NzGridModule, NzIconModule} from 'ng-zorro-antd';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    PedidosPageRoutingModule,
    LayoutModule,
    NzIconModule,
    NzAvatarModule,
    NzCardModule,
    NzGridModule,

  ],
  declarations: [PedidosComponent],
  exports: []

})
export class PedidosPageModule {}
