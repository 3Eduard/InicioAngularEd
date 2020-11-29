import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


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


  constructor() { }
}

