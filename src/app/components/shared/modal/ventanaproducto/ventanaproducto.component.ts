import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-ventanaproducto',
  templateUrl: './ventanaproducto.component.html',
  styleUrls: ['./ventanaproducto.component.sass']
})
export class VentanaproductoComponent implements OnInit {

  pos: number;

  constructor(
    public ProductoServicios: ProductsService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pos = JSON.parse(localStorage.getItem('pos'));
    console.log('variable', this.pos)
  }
}


