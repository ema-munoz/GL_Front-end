import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabStatusModel } from 'src/app/models/lab-status.model';
import { LabStatusHttpService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-edit-lab-status',
  templateUrl: './edit-lab-status.component.html',
  styleUrls: ['./edit-lab-status.component.css']
})
export class EditLabStatusComponent implements OnInit {
  labStatus: LabStatusModel[] = [];
  title: string = 'Editar estado laboratorio';
  myForm: FormGroup;

  constructor(
    private labStatusHttpService: LabStatusHttpService,
    private router : ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router,
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.labStatusHttpService.findOne(this.router.snapshot.params['id']).subscribe(
      (response) => {
        console.log(response)
        console.log(response.data.state)
        this.myForm = new FormGroup({
          state: new FormControl(response.data.state),
          description: new FormControl(response.data.description)
        })
      }
    )
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      state: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]
      ],
      description: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.idField.value) {
        this.update();
      } else {
        this.create();
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
    }
  }

  update(){
    this.labStatusHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-lab-status'])
      },
    );
  }

  create(){
    this.labStatusHttpService.create(this.myForm.value).subscribe(
      response =>{}
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get stateField() {
    return this.myForm.controls['state'];
  }

  get descriptionField() {
    return this.myForm.controls['acronym'];
  }

}
