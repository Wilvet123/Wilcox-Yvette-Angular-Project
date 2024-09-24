import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path:'new-customer',
    component: CreateCustomerComponent
  },
  {
    path:'', redirectTo: '/customer', pathMatch: 'full'
  },
  {
    path: 'edit-customer/:id',
    component: CreateCustomerComponent,
  },
  {
    path: 'view-customer',
    component: CreateCustomerComponent,
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
