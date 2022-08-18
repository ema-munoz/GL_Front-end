import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CareersModel } from 'src/app/models/career.model';
import { CareerHttpService } from 'src/app/services/career.service';

@Component({
  selector: 'app-create-carrer',
  templateUrl: './create-carrer.component.html',
  styleUrls: ['./create-carrer.component.css']
})
export class CreateCarrerComponent implements OnInit {

  careers: CareersModel[] = [];
  title: string = 'Nueva Carrera';
  myForm: FormGroup;

  constructor(
    private careerHttpService: CareerHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router,
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      acronym: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      semesters: [null, [Validators.required, Validators.min(1), Validators.max(10)]]
    })
  }




  store() {

    this.careerHttpService.store(this.myForm.value).subscribe(
      response => { this.route.navigate(['list-carrer']); }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get acronymField() {
    return this.myForm.controls['acronym'];
  }

  get semestersField() {
    return this.myForm.controls['semesters'];
  }

}
