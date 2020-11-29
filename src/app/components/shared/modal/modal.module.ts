import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { SingupComponent } from './singup/singup.component';
import { VentanaproductoComponent } from './ventanaproducto/ventanaproducto.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    VentanaproductoComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
})
export class ModalModule { }
