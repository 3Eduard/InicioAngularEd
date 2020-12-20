import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ClientComponent} from './client.component';
import {ClientPageRoutingModule} from './client-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import { SectionInformativaComponent } from './section-informativa/section-informativa.component';
import { SectionMensajerosComponent } from './section-mensajeros/section-mensajeros.component';
import {SharedModule} from '../../shared/shared.module';
import { NavClientComponent } from './nav-client/nav-client.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    NzCarouselModule,
    SharedModule,
  ],
  declarations: [ClientComponent, SectionInformativaComponent, SectionMensajerosComponent, NavClientComponent],
  exports: []
})
export class ClientPageModule {}
