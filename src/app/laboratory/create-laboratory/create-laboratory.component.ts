import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoriesModel } from 'src/app/models/laboratory.model';
import { LaboratoryHttpService } from 'src/app/services/laboratory.service';

@Component({
  selector: 'app-create-laboratory',
  templateUrl: './create-laboratory.component.html',
  styleUrls: ['./create-laboratory.component.css']
})
export class CreateLaboratoryComponent implements OnInit {

  laboratories: LaboratoriesModel[] = [];
  title: string = 'Nuevo Laboratorio';
  myForm: FormGroup;

  constructor(
    private laboratoryHttpService: LaboratoryHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router,
  ) {
    this.myForm = this.newForm()
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup{
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      capacity: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      stateLaboratoryId: [null, [Validators.required, Validators.min(1), Validators.max(10)]]
    })
  }




  store() {

    this.laboratoryHttpService.store(this.myForm.value).subscribe(
      response => { this.route.navigate(['list-laboratory']); }
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
