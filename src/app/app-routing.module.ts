import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExpenseGuard } from './guards/auth.guards';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate:[ExpenseGuard]},
  {path: 'botones', component: BotonesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  //{path: 'navbar', component: NavbarComponent},
  /*{path: 'navbar',
  loadChildren: ()=>
    import('./navbar/navbar.module').then((m)=>m.NavbarModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
