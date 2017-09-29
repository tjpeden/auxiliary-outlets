import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersAuxComponent } from './users-aux/users-aux.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'aux',
    component: UsersAuxComponent,
  },
  {
    path: '',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
