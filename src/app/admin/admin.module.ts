import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAuxComponent } from './admin-aux/admin-aux.component';
import { AdminOtherComponent } from './admin-other/admin-other.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminListComponent, AdminAuxComponent, AdminOtherComponent]
})
export class AdminModule { }
