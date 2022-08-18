import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
/* Teacher */
import { CreateTeachersComponent } from './teacher/create-teachers/create-teachers.component';
import { ViewTeachersComponent } from './teacher/view-teachers/view-teachers.component';
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';
import { EditTeachersComponent } from './teacher/edit-teachers/edit-teachers.component';
//import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'botones', component: BotonesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  /* Teachers  */
  {path: 'create-teachers', component: CreateTeachersComponent},
  {path: 'list-teachers', component: ListTeachersComponent},
  {path: 'view-teachers', component: ViewTeachersComponent},
  {path: 'edit-teachers', component: EditTeachersComponent},
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
