import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productos1 : any


  pro: Producto = {
    nombre_proyecto:null,
    titulo:null,
    descripcion:null,
    //resumen:null,
    precio:null,
    //color:null,
    imagen:null,
    //marca:null,
    //ubicacion:null,
    //destacado:null,
    //state:null

 };

  productos= [
    {
      "id":1,
      "nombre":"pollo broaster",
      "precio":'34000' ,
      "imagen":'assets/productos/1.png',
      "descripcion":" Pollo Broaster crujiente+ Papa Fritas"

    },
    {
      "id":2,
      "nombre":"Alitas BBQ",
      "precio":"12000",
      "imagen":"assets/productos/2.jpg",
      "descripcion":" Alitas, Suave y delicioso+ Papa Fritas"
    },
    {
      "id":3,
      "nombre":"pizza mexicana",
      "precio":"4500 ",
      "imagen":"assets/productos/3.jpg",
      "descripcion":" pizza crujiente, al estilo mexicano "
    },
    {
      "id":4,
      "nombre":"pizza especial",
      "precio":"3000 ",
      "imagen":"assets/productos/5.jpg",
      "descripcion":"pizza especial, al estilo mexicano"
    },
    {
      "id":5,
      "nombre":"tacos mexicanos",
      "precio":"18000",
      "imagen":"assets/productos/4.jpg",
      "descripcion":"picantes al estilo mexicano "
    },
    {
      "id":6,
      "nombre":"jugo de naranja",
      "precio":"2000",
      "imagen":"assets/productos/14.jpg",
      "descripcion":" "
    },
    {
      "id":7,
      "nombre":"Picadas",
      "precio":"30000",
      "imagen":"assets/productos/20.jpg",
      "descripcion":" "
    },
    {
      "id":8,
      "nombre":"hamburguesa esp",
      "precio":"8000",
      "imagen":"assets/productos/8.jpg",
      "descripcion":" "
    },
    {
      "id":9,
      "nombre":"bandeja paisa",
      "precio":"29000",
      "imagen":"assets/productos/6.jpg",
      "descripcion":" "
    },
    {
      "id":10,
      "nombre":"Almuerzo Corriente",
      "precio":"7000",
      "imagen":"assets/productos/7.jpg",
      "descripcion":"7000"
    }
  ];




  constructor(
    private httpClient: HttpClient,
    private  authService: AuthService,
  ) { }



  traertodo()
  {
    return this.httpClient.get(this.authService.API+'product/all',{headers: this.authService.headers} )
  }

  crearproducto(productos2 )
  {
    return this.httpClient.post(this.authService.API+'add/product',productos2 ,{headers: this.authService.headers} )
  }

  actualizarproducto()
  {
    return this.httpClient.put(this.authService.API+'update/product',{headers: this.authService.headers} )
  }
  eliminarproducto()
  {
    return this.httpClient.put(this.authService.API+'delete/product',{'product_id': 4},{headers: this.authService.headers} )
  }

  consultarproducto()
  {
    return this.httpClient.post(this.authService.API+'query/product',{'product_id': 1},{headers: this.authService.headers} )
  }

  habilitarproducto()
  {
    return this.httpClient.put(this.authService.API+'enable/product',{headers: this.authService.headers} )
  }
  desabilitarproducto()
  {
    return this.httpClient.put(this.authService.API+'disable/product',{headers: this.authService.headers} )
  }





}



