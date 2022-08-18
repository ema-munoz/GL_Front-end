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
  selector: 'app-edit-subject-teaching-detail',
  templateUrl: './edit-subject-teaching-detail.component.html',
  styleUrls: ['./edit-subject-teaching-detail.component.css']
})
export class EditSubjectTeachingDetailComponent implements OnInit {

  listSubjectTeachers: ListSubjectTeacherModel[] = [];
  courses: CourseModel[] = [];
  teacher: TeachersModel[] = [];
  subject: SubjectHttpService[] = [];

  myForm: FormGroup;

  title: string = 'Editar Distribucion Docente';

  constructor(
    private listSubjectTeacherHttpService: ListSubjectTeacherHttpService,
    private teacherHttpService: TeacherHttpService,
    private courseHttpService: CourseHttpService,
    private subjectHttpService: SubjectHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router
  ) {
    this.myForm = this.newForm();
   }

   ngOnInit(): void {
    this.loadCourses();
    console.log(this.router.snapshot.params['id'])
    this.listSubjectTeacherHttpService.show(this.router.snapshot.params['id']).subscribe(
      (result) => {
        console.log (result)
        console.log(result.data.name)
        this.myForm = new FormGroup({
        course: new FormControl(result.data.course, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        teacher: new FormControl(result.data.teacher, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
        subject: new FormControl(result.data.subject, [Validators.required, Validators.min(1), Validators.max(10)]),
        date: new FormControl(result.data.date, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        day: new FormControl(result.data.day, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
        hourStart: new FormControl(result.data.hourStart, [Validators.required, Validators.min(1), Validators.max(10)]),
        hourFinish: new FormControl(result.data.hourFinish, [Validators.required, Validators.min(1), Validators.max(10)]),
      })}
    )
  }

  loadCourses() {
    this.courseHttpService.index().subscribe(
      response => {
        this.teacher = response.data;
        console.log(response.data)
      }
    );
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      course: [null,[Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        teacher:[null,[Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
        subject: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
        date: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        day:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
        hourStart: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
        hourFinish:  [null, [Validators.required, Validators.min(1), Validators.max(10)]],
    })
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.idField.value) {
        this.update();
      } else {
        this.store();
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
    }
  }

  update() {

    this.listSubjectTeacherHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-subject-teaching-detail']);
      },

    );
  }


  store() {

    this.listSubjectTeacherHttpService.store(this.myForm.value).subscribe(
      response => {
      }
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
