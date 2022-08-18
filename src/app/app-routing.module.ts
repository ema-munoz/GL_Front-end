import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';
import { LoginComponent } from './login/login.component';
import { CreateMatterComponent } from './matter/create-matter/create-matter.component';
import { ListMatterComponent } from './matter/list-matter/list-matter.component';
//import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'botones', component: BotonesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'list-teachers', component: ListTeachersComponent},
  {path: 'create-matter', component: CreateMatterComponent},
  {path: 'list-matter', component: ListMatterComponent},
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
