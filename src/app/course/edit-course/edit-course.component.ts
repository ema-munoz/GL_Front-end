import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseHttpService} from 'src/app/services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: CourseModel[] = [];
  title: string = 'Editar Curso';
  myForm: FormGroup;

  constructor(
    private courseHttpService: CourseHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router,
  ) {
     this.myForm = this.newForm();
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.courseHttpService.show(this.router.snapshot.params['id']).subscribe(
      (result) => { 
        console.log (result)
        console.log(result.data.name)
        this.myForm = new FormGroup({
        name: new FormControl(result.data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        number: new FormControl(result.data.acronym, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
        semesters: new FormControl(result.data.semesters, [Validators.required, Validators.min(1), Validators.max(10)]),
        career: new FormControl(result.data.career, [Validators.required, Validators.min(1), Validators.max(10)]),
        parallel: new FormControl(result.data.parallel, [Validators.required, Validators.min(1), Validators.max(10)]),
        shift: new FormControl(result.data.shift, [Validators.required, Validators.min(1), Validators.max(10)]),
      })}
    )
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
     
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

    this.courseHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-carrer']);
      },
      
    );
  }
 

  store() {

    this.courseHttpService.store(this.myForm.value).subscribe(
      response => {
      }
    );
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
