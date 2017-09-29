import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsAuxComponent } from './clients-aux/clients-aux.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [ClientsListComponent, ClientsAuxComponent]
})
export class ClientsModule { }
