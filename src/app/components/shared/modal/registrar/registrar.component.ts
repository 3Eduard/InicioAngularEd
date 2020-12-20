import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../../models/producto';
import {NzModalRef} from 'ng-zorro-antd';
import {ProductsService} from '../../../../services/products.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.sass']
})
export class RegistrarComponent implements OnInit {

  productos2: Producto=
    {
      nombre_proyecto: null,
      titulo: null,
      descripcion: null,
      precio: null,
      imagen: null
    }

  constructor(
    private  modal:NzModalRef,
    public ProductoServicios: ProductsService,
  ) { }

  ngOnInit(): void {
  }


  cancelar()
  {
    this.modal.destroy();
  }

  form()
  {
    alert('Sus Datos Estan siendo Verificados porfavor intente mas tarde');
    console.log('Datos enviados')
    console.log(this.productos2 );
    localStorage.setItem('registrar',JSON.stringify(this.productos2));
    this.crearproducto(this.productos2);
  }


  crearproducto(crear)
  {
    this.ProductoServicios.crearproducto(crear).subscribe((data)  =>{
      console.log('Producto Para crear ')
      console.log(data);
      let res = data['status'];
      if(res == 'success')
      {
        console.log('juanes');
        this.modal.destroy();
      }
    }, error => {
      console.log(error)
    });
  }
}
