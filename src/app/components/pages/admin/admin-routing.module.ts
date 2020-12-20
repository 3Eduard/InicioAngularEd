import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
       loadChildren: () => import('../admin/home/home.module').then(m => m.HomePageModules),
      },
      {
        path: 'productos',
        loadChildren: () => import('../admin/productos/productos.module').then(m => m.ProductosPageModules),
      },
    ],
  },
  //caa debe ir la ruta del loguin
  {
    path: 'login',
    //loadChildren: () => import('').then(m => m.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
