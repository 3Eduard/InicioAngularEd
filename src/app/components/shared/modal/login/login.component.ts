import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {usuario} from '../../../../models/usuario';
import {Login} from '../../../../models/login';
import {LoginService} from '../../../../services/login.service';
import {Token} from '@angular/compiler';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: Login =
    {
      code: null,
      password: null,
      getToken: true
    }

  constructor(
    private  modal:NzModalRef,
    private LoginService: LoginService,
    private  authService: AuthService,
    private route: Router

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
     //alert('Sus Datos fueron enviados');
     console.log('Datos enviados')
     console.log(this.login );
     localStorage.setItem('userL',JSON.stringify(this.login));
     this.loginToken(this.login);
   }



  loginToken(lo)
  {
    this.LoginService.login(lo).subscribe((Token)  =>{
      console.log('respuesta del servidor')
      console.log(Token);
      console.log('Token traido')
       let token = Token['data'];
       console.log(token)
        if(token['status'] == 'success')
        {
          //this.authService.TOKEN = token['data']
          this.authService.Header(token['data']);
          //this.authService.state= true;
          localStorage.setItem('token',JSON.stringify(token['data']));
          console.log('Funcionaaaaaa')
          this.modal.destroy();
              setTimeout(()=>{
            this.route.navigate(['/admin']);
         }, 200);
        }
    }, error => {
      console.log('Error enn los datos')
      console.log(error)
    });
  }



}

