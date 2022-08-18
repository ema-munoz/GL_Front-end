import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from 'src/app/models/course.model';
import { ListSubjectTeacherModel } from 'src/app/models/listSubjectTeacher.model';
import { TeachersModel } from 'src/app/models/teacher.model';
import { CourseHttpService } from 'src/app/services/course.service';
import { ListSubjectTeacherHttpService } from 'src/app/services/listSubjectTeacher.service';
import { SubjectHttpService } from 'src/app/services/subject.service';
import { TeacherHttpService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-create-subject-teaching-detail',
  templateUrl: './create-subject-teaching-detail.component.html',
  styleUrls: ['./create-subject-teaching-detail.component.css']
})
export class CreateSubjectTeachingDetailComponent implements OnInit {

  listSubjectTeachers: ListSubjectTeacherModel[] = [];
  courses: CourseModel[] = [];
  teacher: TeachersModel[] = [];
  subject: SubjectHttpService[] = [];

  myForm: FormGroup;

  title: string = 'Crear Distributivo Docente ';

  constructor(
    private listSubjectTeacherHttpService: ListSubjectTeacherHttpService,
    private teacherHttpService: TeacherHttpService,
    private courseHttpService: CourseHttpService,
    private subjectHttpService: SubjectHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      course: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      teacher: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      subject: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      date: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      day: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      hourStart: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      hourFinish: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
    })
  }

  loadCourses() {
    this.courseHttpService.index().subscribe(
      response => {
        this.teacher = response.data;
        console.log(response.data)
      }
    );
  }



  store() {

    this.listSubjectTeacherHttpService.store(this.myForm.value).subscribe(
      response => { this.route.navigate(['list-subject-teaching-detail']); }
    );
  }


  get idField() {
    return this.myForm.controls['id'];
  }

  get courseField() {
    return this.myForm.controls['course'];
  }

  get teacherField() {
    return this.myForm.controls['teacher'];
  }

  get subjectField() {
    return this.myForm.controls['subject'];
  }

  get dateField() {
    return this.myForm.controls['date'];
  }

  get dayField() {
    return this.myForm.controls['day'];
  }

  get hourStartField() {
    return this.myForm.controls['hourStart'];
  }
  get hourFinishField() {
    return this.myForm.controls['hourFinish'];
  }

}
