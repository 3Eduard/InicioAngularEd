import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {usuario} from '../../../../models/usuario';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.sass']
})
export class SingupComponent implements OnInit {

  registro: usuario =
    {
      usuario: null,
      cont: null,
      profile: null
    }


  constructor(
    private  modal:NzModalRef,
  ) { }

  ngOnInit(): void {
  }



  cancelar()
  {
    this.modal.destroy();
  }

  form()
  {
    console.log(this.registro)
    localStorage.setItem('userR',JSON.stringify(this.registro));
    alert('Sus Datos se han Registrado correctamnete');
    this.modal.destroy();
  }

}
