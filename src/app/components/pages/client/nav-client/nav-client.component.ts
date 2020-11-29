import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../shared/modal/login/login.component';
import {NzModalService} from 'ng-zorro-antd';
import {SingupComponent} from '../../../shared/modal/singup/singup.component';

@Component({
  selector: 'app-nav-client',
  templateUrl: './nav-client.component.html',
  styleUrls: ['./nav-client.component.sass']
})
export class NavClientComponent implements OnInit {

  constructor(
    public modalService: NzModalService
  ) { }

  ngOnInit(): void {
  }

  showModalLogin()
  {
    const  modal = this.modalService.create({
      nzTitle: 'Inicia sesion',
      nzContent: LoginComponent,
      nzFooter: null,
    });
  }

  showModalSingup()
  {
    const  modal = this.modalService.create({
      nzTitle: 'Registarte',
      nzContent: SingupComponent,
      nzFooter: null,
    });
  }

}
