import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../services/prueba.service';



@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass'],
  providers:[PruebaService]
})
export class NosotrosComponent implements OnInit {


  selectedValue: any;
  constructor(
    public pruebaServicios: PruebaService,

  ) { }

  ngOnInit(): void {

  }

  pruebadatos(){
   console.log(this.selectedValue);
   this.pruebaServicios.prueba2 = this.selectedValue
  }





}
