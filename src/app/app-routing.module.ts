import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExpenseGuard } from './guards/auth.guards';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/* Teacher */
import { CreateTeachersComponent } from './teacher/create-teachers/create-teachers.component';
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
/* Laboratory */
import { EditLaboratoryComponent } from './laboratory/edit-laboratory/edit-laboratory.component';
import { ListLaboratoryComponent } from './laboratory/list-laboratory/list-laboratory.component';
import { CreateLaboratoryComponent } from './laboratory/create-laboratory/create-laboratory.component';
  /*Course*/
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
/*Subject Teaching detail*/
import { CreateSubjectTeachingDetailComponent } from './subject-teaching-detail/create-subject-teaching-detail/create-subject-teaching-detail.component';
import { ListSubjectTeachingDetailComponent } from './subject-teaching-detail/list-subject-teaching-detail/list-subject-teaching-detail.component';
import { EditSubjectTeachingDetailComponent } from './subject-teaching-detail/edit-subject-teaching-detail/edit-subject-teaching-detail.component';
 /*Lab Matter Detail*/
import { CreateLabMatterDetailComponent } from './lab-matter-detail/create-lab-matter-detail/create-lab-matter-detail.component';
import { ListLabMatterDetailComponent } from './lab-matter-detail/list-lab-matter-detail/list-lab-matter-detail.component';
import { EditLabMatterDetailComponent } from './lab-matter-detail/edit-lab-matter-detail/edit-lab-matter-detail.component';

import { LogoutComponent } from './logout/logout.component';
//import { NavbarComponent } from './navbar/navbar.component';

/*location*/
import { ListLocationComponent } from './location/list-location/list-location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate:[ExpenseGuard]},
  {path: 'botones', component: BotonesComponent, canActivate:[ExpenseGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  /* Teachers  */

  {path: 'create-teachers', component: CreateTeachersComponent, canActivate:[ExpenseGuard]},
  {path: 'list-teachers', component: ListTeachersComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-teachers/:id', component: EditTeachersComponent, canActivate:[ExpenseGuard]},

  /*Subjects*/
  {path: 'create-subject', component: CreateMatterComponent, canActivate:[ExpenseGuard]},
  {path: 'list-subject', component: ListMatterComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-subject/:id', component: EditMatterComponent, canActivate:[ExpenseGuard]},

  /*Carrer*/
  {path: 'create-carrer', component: CreateCarrerComponent, canActivate:[ExpenseGuard]},
  {path: 'list-carrer', component: ListCarrerComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-carrer/:id', component: EditCarrerComponent, canActivate:[ExpenseGuard]},

  /*Lab Status*/
  {path: 'create-lab-status', component: CreateLabStatusComponent, canActivate:[ExpenseGuard]},
  {path: 'list-lab-status', component: ListLabStatusComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-lab-status/:id', component: EditLabStatusComponent, canActivate:[ExpenseGuard]},

  /*Laboratory*/
  {path: 'create-laboratory', component: CreateLaboratoryComponent, canActivate:[ExpenseGuard]},
  {path: 'list-laboratory', component: ListLaboratoryComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-laboratory', component: EditLaboratoryComponent, canActivate:[ExpenseGuard]},

  /*Course*/
  {path: 'create-course', component: CreateCourseComponent, canActivate:[ExpenseGuard]},
  {path: 'list-course', component: ListCourseComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-course', component: EditCourseComponent, canActivate:[ExpenseGuard]},

  /*Subject Teaching detail*/
   {path: 'create-subject-teaching-detail', component: CreateSubjectTeachingDetailComponent, canActivate:[ExpenseGuard]},
   {path: 'list-subject-teaching-detail', component: ListSubjectTeachingDetailComponent, canActivate:[ExpenseGuard]},
   {path: 'edit-subject-teaching-detail', component: EditSubjectTeachingDetailComponent, canActivate:[ExpenseGuard]},

  /*Lab Matter Detail*/
  {path: 'create-lab-matter-detail', component: CreateLabMatterDetailComponent, canActivate:[ExpenseGuard]},
  {path: 'list-lab-matter-detail', component: ListLabMatterDetailComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-lab-matter-detail', component: EditLabMatterDetailComponent, canActivate:[ExpenseGuard]},

  /*Location*/
  {path: 'create-location', component: CreateLocationComponent, canActivate:[ExpenseGuard]},
  {path: 'list-location', component: ListLocationComponent, canActivate:[ExpenseGuard]},
  {path: 'edit-location', component: EditLocationComponent, canActivate:[ExpenseGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
