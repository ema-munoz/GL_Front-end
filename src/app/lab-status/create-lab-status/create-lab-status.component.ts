import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabStatus } from 'src/app/models/lab-status.model';
import { LabStatusService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-create-lab-status',
  templateUrl: './create-lab-status.component.html',
  styleUrls: ['./create-lab-status.component.css']
})
export class CreateLabStatusComponent implements OnInit {
  labStatus: LabStatus[]= [];
  title: string = 'Estado laboratorio';
  myForm: FormGroup;
  constructor(
    private labStatusService: LabStatusService,
    private formBuilder: FormBuilder
  ) { 
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      state: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
      ],
      description: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]
    });
  }
  
  findAll() {
    this.labStatusService.findAll().subscribe((response) => {
      this.labStatus = response.data;
    });
  }

  onSubmit(){
    if (this.myForm.valid) {
      if(this.nameField.value){
        this.create();
      }
      this.myForm.reset();
    } else{
      alert('El formulario no es valido');
    }
  }

  create() {
    this.labStatusService.create(this.myForm.value).subscribe((response) => {
      this.findAll();
    });
  }

  get nameField() {
    return this.myForm.controls['id'];
  }
}

