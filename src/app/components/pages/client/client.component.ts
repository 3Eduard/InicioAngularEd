import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../services/prueba.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {

  constructor(
    public pruebaServicios: PruebaService,
  ) { }

  ngOnInit() {

     this.pruebaServicios.prueba1 = "Hola Texto desde el cliente"
  }

}
