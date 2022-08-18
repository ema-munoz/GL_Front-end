import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListSubjectTeacherModel } from 'src/app/models/listSubjectTeacher.model';
import { TeachersModel } from 'src/app/models/teacher.model';
import { ListSubjectTeacherHttpService } from 'src/app/services/listSubjectTeacher.service';
import { SubjectHttpService } from 'src/app/services/subject.service';
import { TeacherHttpService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-subject-teaching-detail',
  templateUrl: './list-subject-teaching-detail.component.html',
  styleUrls: ['./list-subject-teaching-detail.component.css']
})
export class ListSubjectTeachingDetailComponent implements OnInit {

  listSubjectTeachers: ListSubjectTeacherModel[] = [];
  teacher: TeachersModel[] = [];
  subject: SubjectHttpService[] = [];

  title: string = 'Distribución Docente';

  constructor(
    private listSubjectTeacherHttpService: ListSubjectTeacherHttpService,
    private teacherHttpService: TeacherHttpService,
    private subjectHttpService: SubjectHttpService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.index();
    this.loadTeacher();
    this.loadSubject();
  }

  loadTeacher() {
    this.teacherHttpService.index().subscribe(
      response => {
        this.teacher = response.data;
        console.log(response.data)
      }
    );
  }

  loadSubject() {
    this.subjectHttpService.index().subscribe(
      response => {
        this.subject = response.data;
        console.log(response.data)
      }
    );
  }

  index() {
    this.listSubjectTeacherHttpService.index().subscribe(
      response => {
        this.listSubjectTeachers = response.data;
        console.log(response.data)
      }
    );
  }

  destroy(id: number) {
    this.listSubjectTeacherHttpService.destroy(id).subscribe(
      response => {
        this.index();
      }
    );
  }

}
