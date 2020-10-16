import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {ContactComponent} from './contact.component';
import {ContactPageRoutingModule} from './contact-routing.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ContactPageRoutingModule,
    LayoutModule,
  ],
  declarations: [ContactComponent],
  exports: []

})
export class ContactPageModule{}
