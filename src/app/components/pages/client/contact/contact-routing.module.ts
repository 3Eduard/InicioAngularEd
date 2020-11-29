import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ClientGuard} from '../../../../guard/client.guard';

const routes: Routes = [

  {
    path: '',
    component: ContactComponent,
  //canActivate: [ClientGuard]
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ContactPageRoutingModule {}
