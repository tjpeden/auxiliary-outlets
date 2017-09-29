import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAuxComponent } from './admin-aux/admin-aux.component';
import { AdminOtherComponent } from './admin-other/admin-other.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'aux',
    component: AdminAuxComponent,
  },
  {
    path: '',
    component: AdminListComponent,
  },
  {
    path: 'other',
    component: AdminOtherComponent,
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
export class AdminRoutingModule { }
