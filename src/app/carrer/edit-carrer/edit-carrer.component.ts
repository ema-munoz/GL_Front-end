import { Component, OnInit } from '@angular/core';
import { CareersModel } from 'src/app/models/career.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CareerHttpService } from 'src/app/services/career.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-carrer',
  templateUrl: './edit-carrer.component.html',
  styleUrls: ['./edit-carrer.component.css']
})
export class EditCarrerComponent implements OnInit {

  careers: CareersModel[] = [];
  title: string = 'Editar Carrera';
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
        acronym: new FormControl(result.data.acronym, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
        semesters: new FormControl(result.data.semesters, [Validators.required, Validators.min(1), Validators.max(10)]),
      })}
    )
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      acronym: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      semesters: [null, [Validators.required, Validators.min(1), Validators.max(10)]]
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
        this.route.navigate(['list-carrer']);
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

  get acronymField() {
    return this.myForm.controls['acronym'];
  }

  get semestersField() {
    return this.myForm.controls['semesters'];
  }

}
