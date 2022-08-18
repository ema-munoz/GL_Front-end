import { Component, OnInit } from '@angular/core';
import { CareersModel } from 'src/app/models/career.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CareerHttpService } from 'src/app/services/career.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-laboratory',
  templateUrl: './edit-laboratory.component.html',
  styleUrls: ['./edit-laboratory.component.css']
})
export class EditLaboratoryComponent implements OnInit {

  careers: CareersModel[] = [];
  title: string = 'Editar Laboratorya';
  myForm: FormGroup;

  constructor(
    private careerHttpService: CareerHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router,
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.careerHttpService.show(this.router.snapshot.params['id']).subscribe(
      (result) => {
        console.log (result)
        console.log(result.data.name)
        this.myForm = new FormGroup({
        name: new FormControl(result.data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        capacity: new FormControl(result.data.acronym, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
        stateLaboratoryId: new FormControl(result.data.semesters, [Validators.required, Validators.min(1), Validators.max(10)]),
      })}
    )
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      capacity: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      stateLaboratoryId: [null, [Validators.required, Validators.min(1), Validators.max(10)]]
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

    this.careerHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-laboratory']);
      },

    );
  }


  store() {

    this.careerHttpService.store(this.myForm.value).subscribe(
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

  get capacityField() {
    return this.myForm.controls['capacity'];
  }

  get stateLaboratoryIdField() {
    return this.myForm.controls['stateLaboratoryId'];
  }

}
