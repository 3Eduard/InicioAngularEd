import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {NzModalService} from 'ng-zorro-antd';
import {VentanaproductoComponent} from '../../../shared/modal/ventanaproducto/ventanaproducto.component';


@Component({
  selector: 'app-pedidos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  constructor(
      public ProductoServicios: ProductsService,
      public modalService: NzModalService
  ) {

  }


  pos: number;

  ngOnInit(): void {

  }

    targetadatos(i)
    {
      console.log(this.ProductoServicios.productos[i])
      console.log("posicion i");
      console.log(i);
      localStorage.setItem('pos',JSON.stringify(i));
      this.pos = i;
      this.showModalVentanaProducto(this.pos);
    }


  showModalVentanaProducto(i)
  {
    const  modal = this.modalService.create({
      nzTitle: null,
      nzContent: VentanaproductoComponent,
      nzFooter: null,
    });
  }
}


