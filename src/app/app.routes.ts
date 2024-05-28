import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewappointmentComponent } from './pages/newappointment/newappointment.component';
import { AppointmentlistComponent } from './pages/appointmentlist/appointmentlist.component';

export const routes: Routes = [

{
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
},
{
    path:'dashboard',
    component:DashboardComponent,
},
{
    path:'new',
    component:NewappointmentComponent,
},
{
    path:'list',
    component:AppointmentlistComponent,
}
];
