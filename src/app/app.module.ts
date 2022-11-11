import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { BotonesComponent } from './botones/botones.component';

/* Teachers */
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';
import { CreateTeachersComponent } from './teacher/create-teachers/create-teachers.component';
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
import { ListLabStatusComponent } from './lab-status/list-lab-status/list-lab-status.component';
import { CreateLabStatusComponent } from './lab-status/create-lab-status/create-lab-status.component';
import { EditLabStatusComponent } from './lab-status/edit-lab-status/edit-lab-status.component';
/* Laboratory */
import { ListLaboratoryComponent } from './laboratory/list-laboratory/list-laboratory.component';
import { CreateLaboratoryComponent } from './laboratory/create-laboratory/create-laboratory.component';
import { EditLaboratoryComponent } from './laboratory/edit-laboratory/edit-laboratory.component';
/* Course */
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
/* Subject Teaching Detail */
import { ListSubjectTeachingDetailComponent } from './subject-teaching-detail/list-subject-teaching-detail/list-subject-teaching-detail.component';
import { CreateSubjectTeachingDetailComponent } from './subject-teaching-detail/create-subject-teaching-detail/create-subject-teaching-detail.component';
import { EditSubjectTeachingDetailComponent } from './subject-teaching-detail/edit-subject-teaching-detail/edit-subject-teaching-detail.component';
/* Lab Matter Detail */
import { EditLabMatterDetailComponent } from './lab-matter-detail/edit-lab-matter-detail/edit-lab-matter-detail.component';
import { CreateLabMatterDetailComponent } from './lab-matter-detail/create-lab-matter-detail/create-lab-matter-detail.component';
import { ListLabMatterDetailComponent } from './lab-matter-detail/list-lab-matter-detail/list-lab-matter-detail.component';

import { LogoutComponent } from './logout/logout.component';
/* Location */
import { ListLocationComponent } from './location/list-location/list-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { CreateLabAssignamentComponent } from './lab-assignament/create-lab-assignament/create-lab-assignament.component';
import { EditLabAssignamentComponent } from './lab-assignament/edit-lab-assignament/edit-lab-assignament.component';
import { ListLabAssignamentComponent } from './lab-assignament/list-lab-assignament/list-lab-assignament.component';
import { RegisterComponent } from './register/register.component';


//import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForgotPasswordComponent,
    LoginComponent,
    BotonesComponent,
    ListTeachersComponent,
    CreateTeachersComponent,
    EditTeachersComponent,
    CreateMatterComponent,
    ListMatterComponent,
    EditMatterComponent,
    CreateCarrerComponent,
    EditCarrerComponent,
    ListCarrerComponent,
    ListLabStatusComponent,
    CreateLabStatusComponent,
    EditLabStatusComponent,
    ListLaboratoryComponent,
    CreateLaboratoryComponent,
    EditLaboratoryComponent,
    EditCourseComponent,
    CreateCourseComponent,
    ListCourseComponent,
    ListSubjectTeachingDetailComponent,
    CreateSubjectTeachingDetailComponent,
    EditSubjectTeachingDetailComponent,
    EditLabMatterDetailComponent,
    CreateLabMatterDetailComponent,
    ListLabMatterDetailComponent,
    LogoutComponent,
    //NavbarComponent
    ListLocationComponent,
    EditLocationComponent,
    CreateLocationComponent,
    CreateLabAssignamentComponent,
    EditLabAssignamentComponent,
    ListLabAssignamentComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
