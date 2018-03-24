import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DionaeaSensorComponent } from './dionaea-sensor/dionaea-sensor.component';


const appRoutes: Routes = [
   {
     path: '' ,
     redirectTo: '/login',
     pathMatch: 'full',
   },
   {
    path: 'login', 
    component: LoginComponent,
   },
   {
     path: 'dashboard',
     component: DashboardComponent,
   },
   {
     path: 'dionaea',
     component: DionaeaSensorComponent,
   },
   {
     path: '**' ,
     redirectTo: '/login',
     pathMatch: 'full'
   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
