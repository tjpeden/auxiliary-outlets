import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <h1>auxiliary Outlets Test</h1>
    <a href="#" [routerLink]="['/admin']">Admin</a>
    <a href="#" [routerLink]="['/clients']">Clients</a>
    <router-outlet name="aux"></router-outlet>
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent { }
