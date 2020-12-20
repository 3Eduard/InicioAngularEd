import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {SingupComponent} from '../../../shared/modal/singup/singup.component';
import {NzModalService} from 'ng-zorro-antd';
import {RegistrarComponent} from '../../../shared/modal/registrar/registrar.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {


  constructor(
    public ProductoServicios: ProductsService,
    public modalService: NzModalService
  ) { }

  ngOnInit(): void {

  }




  actualizarproducto()
  {
    this.ProductoServicios.actualizarproducto().subscribe((data)  =>{
      console.log('Todos los productos')
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

  eliminarproducto()
  {
    this.ProductoServicios.eliminarproducto().subscribe((data)  =>{
      console.log('Producto Eliminado')
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

  consultarproducto()
  {
    this.ProductoServicios.consultarproducto().subscribe((data) => {
      console.log('consulta uno solo')
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

  habilitarproducto()
  {
    this.ProductoServicios.habilitarproducto().subscribe((data) => {
      console.log('consulta uno solo')
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

  desabilitarproducto()
  {
    this.ProductoServicios.desabilitarproducto().subscribe((data) => {
      console.log('consulta uno solo')
      console.log(data);
    }, error => {
      console.log(error)
    });
  }


  showModalCrearproducto()
  {
    const  modal = this.modalService.create({
      nzTitle: 'Registarte',
      nzContent: RegistrarComponent,
      nzFooter: null,
    });
  }

}
