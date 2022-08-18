import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExpenseGuard } from './guards/auth.guards';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/* Teacher */
import { CreateTeachersComponent } from './teacher/create-teachers/create-teachers.component';
import { ViewTeachersComponent } from './teacher/view-teachers/view-teachers.component';
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';
import { EditTeachersComponent } from './teacher/edit-teachers/edit-teachers.component';
/* Matter */
import { CreateMatterComponent } from './matter/create-matter/create-matter.component';
import { EditMatterComponent } from './matter/edit-matter/edit-matter.component';
import { ListMatterComponent } from './matter/list-matter/list-matter.component';
/* Carrer */
import { CreateCarrerComponent } from './carrer/create-carrer/create-carrer.component';
import { EditCarrerComponent } from './carrer/edit-carrer/edit-carrer.component';
import { ListCarrerComponent } from './carrer/list-carrer/list-carrer.component';
/* Lab Status */
import { CreateLabStatusComponent } from './lab-status/create-lab-status/create-lab-status.component';
import { EditLabStatusComponent } from './lab-status/edit-lab-status/edit-lab-status.component';
import { ListLabStatusComponent } from './lab-status/list-lab-status/list-lab-status.component';
//import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate:[ExpenseGuard]},
  {path: 'botones', component: BotonesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  /* Teachers  */
  {path: 'create-teachers', component: CreateTeachersComponent, canActivate:[ExpenseGuard]},
  {path: 'list-teachers', component: ListTeachersComponent, canActivate:[ExpenseGuard]},
  {path: 'view-teachers', component: ViewTeachersComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-teachers', component: EditTeachersComponent, canActivate:[ExpenseGuard]},
  /*Matter*/
  {path: 'create-matter', component: CreateMatterComponent, canActivate:[ExpenseGuard]},
  {path: 'list-matter', component: ListMatterComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-matter', component: EditMatterComponent, canActivate:[ExpenseGuard]},
  /*Carrer*/
  {path: 'create-carrer', component: CreateCarrerComponent, canActivate:[ExpenseGuard]},
  {path: 'list-carrer', component: ListCarrerComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-carrer', component: EditCarrerComponent, canActivate:[ExpenseGuard]},

  /*Lab Status*/
  {path: 'create-lab-status', component: CreateLabStatusComponent},
  {path: 'list-lab-status', component: ListLabStatusComponent},
  {path: 'edit-lab-status', component: EditLabStatusComponent},



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
