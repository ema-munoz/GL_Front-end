import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from 'src/app/models/course.model';
import { CourseHttpService } from 'src/app/services/course.service';



@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  courses: CourseModel[] = [];
  title: string = 'Nuevo Curso';
  myForm: FormGroup;

  constructor(
    private courseHttpService: CourseHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.myForm = this.newForm();
  }
  newForm(): FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  store() {
    this.courseHttpService.store(this.myForm.value).subscribe((response) => {
      this.route.navigate(['list-course']);
    });
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get numberField() {
    return this.myForm.controls['number'];
  }

  get semestersField() {
    return this.myForm.controls['semesters'];
  }

  get careerField() {
    return this.myForm.controls['career'];
  }

  get parallelField() {
    return this.myForm.controls['parallel'];
  }

  get shiftField() {
    return this.myForm.controls['shift'];
  }
}
