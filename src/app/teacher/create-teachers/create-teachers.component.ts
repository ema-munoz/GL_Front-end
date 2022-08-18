import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersModel } from 'src/app/models/teacher.model';
import { TeacherHttpService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {

  careers: TeachersModel[] = [];
  title: string = 'Nuevo Docente';
  myForm: FormGroup;

  constructor(
    private teacherHttpService: TeacherHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router,
  ) { 
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      identificationCard:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(11)]],
      names: [null, [Validators.required, Validators.minLength(2)]],
      surnames: [null, [Validators.required, Validators.minLength(2)]],
      institutionalEmail: [null, [ Validators.required, Validators.email]],
      phone: [null, [ Validators.minLength(2), Validators.maxLength(20)]],
    })
  }

  store() {

    this.teacherHttpService.store(this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-teachers']);
      }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get identificationCardField() {
    return this.myForm.controls['identificationCard'];
  }

  get namesField() {
    return this.myForm.controls['names'];
  }

  get surnamesField() {
    return this.myForm.controls['surnames'];
  }

  get institutionalEmailField() {
    return this.myForm.controls['institutionalEmail'];
  }

  get phoneField() {
    return this.myForm.controls['phone'];
  }

}

