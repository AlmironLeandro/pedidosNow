import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHamburgerComponent } from './components/list-hamburger/list-hamburger.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: ListHamburgerComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'orders', component: OrdersComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: '**', redirectTo: '/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
