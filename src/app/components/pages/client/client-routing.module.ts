import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    // canActivate: [ClientPermissionsGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule),
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosPageModule),
      }
      ,
      {
        path: 'productos',
        loadChildren: () => import('./producto/producto.module').then(m => m.ProductoPageModule),
      }

    ],
  },
  //caa debe ir la ruta del loguin
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
