import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { ListSubjectComponent } from './subjects/list-subject/list-subject.component';

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
import { ViewTeachersComponent } from './teacher/view-teachers/view-teachers.component';
/* Matter */
import { CreateMatterComponent } from './matter/create-matter/create-matter.component';
import { EditMatterComponent } from './matter/edit-matter/edit-matter.component';
import { ListMatterComponent } from './matter/list-matter/list-matter.component';
/* Carrer */
import { CreateCarrerComponent } from './carrer/create-carrer/create-carrer.component';
import { EditCarrerComponent } from './carrer/edit-carrer/edit-carrer.component';
import { ListCarrerComponent } from './carrer/list-carrer/list-carrer.component';

//import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSubjectComponent,
    ListSubjectComponent,
    HomeComponent,
    ForgotPasswordComponent,
    LoginComponent,
    BotonesComponent,
    ListTeachersComponent,
    CreateTeachersComponent,
    EditTeachersComponent,
    ViewTeachersComponent,
    CreateMatterComponent,
    ListMatterComponent,
    EditMatterComponent,
    CreateCarrerComponent,
    EditCarrerComponent,
    ListCarrerComponent,
    //NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
