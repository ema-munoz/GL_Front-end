import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { ListSubjectComponent } from './subjects/list-subject/list-subject.component';

const routes: Routes = [
  {path: '', component:ListSubjectComponent},
  {path: 'create', component:CreateSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
