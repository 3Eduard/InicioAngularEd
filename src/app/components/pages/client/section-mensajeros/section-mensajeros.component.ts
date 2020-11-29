import { Component, OnInit } from '@angular/core';
import {MensajeroService} from '../../../../services/mensajero.service';

@Component({
  selector: 'app-section-mensajeros',
  templateUrl: './section-mensajeros.component.html',
  styleUrls: ['./section-mensajeros.component.sass']
})
export class SectionMensajerosComponent implements OnInit {


  constructor(
    public MensajeroService : MensajeroService
  ) { }



  ngOnInit(): void {
  }

}
