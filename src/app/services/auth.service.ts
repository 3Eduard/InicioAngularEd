import { Injectable } from '@angular/core';
import {usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  state:boolean

  login: usuario =
    {
      usuario: null,
      cont: null,
      profile:null
    }

  constructor() { }
}
