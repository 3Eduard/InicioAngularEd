import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {usuario} from '../../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: usuario =
    {
      usuario: null,
      cont: null,
      profile:null,
    }

  constructor(
    private  modal:NzModalRef,

  ) { }

  ngOnInit(): void {
    //this.login = JSON.parse(localStorage.getItem( "user")) ;
    //console.log('datos traido de local'+this.login)
  }



   cancelar()
   {
     this.modal.destroy();
   }

   form()
   {
     alert('Sus Datos Estan siendo Verificados porfavor intente mas tarde');
     console.log(this.login)
     localStorage.setItem('userL',JSON.stringify(this.login));
   }
}

