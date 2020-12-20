import { Injectable } from '@angular/core';
import {usuario} from '../models/usuario';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod'
import {Login} from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API: String;
  headers: HttpHeaders;
  TOKEN: any;

  state:boolean

  login: usuario =
    {
      usuario: null,
      cont: null,
      profile:null
    }



  // router: Router;

   HEADER: HttpHeaders;

   //people: person =
    //{
      //name: null,
      //last_name:null,
      //code: null,
      //password: null,
      //state:null,
    //}

  //profile = []

  constructor(
    private  httpclient: HttpClient,
  ) {

    this.header();
    this.API = environment.API;
    this.HEADER = new HttpHeaders({
      'Autorization': this.TOKEN
    })
  }

  token()
  {
    let  token = JSON.parse(localStorage.getItem('token'))
    if(token)
    {
      this.state = true;
      return token;
      console.log('token aqui')
    }
  }


  header(){
    this.TOKEN = this.token();
    if (this.TOKEN){
      console.log('header con token')
       this.headers = new  HttpHeaders({
         'Content-Type':'application/json',
         'Authorization':this.TOKEN
       });
    }else{
      console.log('header sin token')
       this.headers = new  HttpHeaders({
         'Content-Type':'application/json'
      });
    }
    return this.headers;
  }



  Header(token){
    console.log('Entro Header')
      this.headers = new  HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.TOKEN
      });
  }

}
