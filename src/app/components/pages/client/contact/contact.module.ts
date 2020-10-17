import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {ContactComponent} from './contact.component';
import {ContactPageRoutingModule} from './contact-routing.module';
import {NzButtonModule, NzFormModule, NzGridModule, NzInputModule} from 'ng-zorro-antd';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ContactPageRoutingModule,
    LayoutModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,

  ],
  declarations: [ContactComponent,],
  exports: []

})
export class ContactPageModule{}
