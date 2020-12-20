import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {

  mensajeros = [
    {
      "id":1,
      "nombre":"juan carlos",
      "apellidos":"casare telles",
      "edad":"22",
      "telefono":"300456789",
      "experiencia":"Experiencia 2 meses",
      "imagen":"assets/mensajeros/DULVER.JPG"
    },
    {
      "id":2,
      "nombre":"dulver ",
      "apellidos":"quintana",
      "edad":"23",
      "telefono":"300445566",
      "experiencia":"Experiencia 6 meses",
      "imagen":"assets/mensajeros/HENNRY.JPG"
    },
    {
      "id":3,
      "nombre":"David",
      "apellidos":"Gonzales",
      "edad":"22",
      "telefono":"300456789",
      "experiencia":"Experiencia 3 meses",
      "imagen":"assets/mensajeros/JUAN1.png"
    }
  ];

  constructor(
    private httpClient: HttpClient,
    private AuthService: AuthService
  ) {

  }

  mensajerof()
  {
    return this.httpClient.get(this.AuthService.API+'',{})
  }
}
