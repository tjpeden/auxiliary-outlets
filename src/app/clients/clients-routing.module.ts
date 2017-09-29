import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsAuxComponent } from './clients-aux/clients-aux.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'aux',
    component: ClientsAuxComponent,
  },
  {
    path: '',
    component: ClientsListComponent,
  },
  {
    path: ':id',
    loadChildren: 'app/users/users.module#UsersModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
