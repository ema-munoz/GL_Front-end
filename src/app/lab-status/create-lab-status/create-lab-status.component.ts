import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabStatusModel } from 'src/app/models/lab-status.model';
import { LabStatusHttpService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-create-lab-status',
  templateUrl: './create-lab-status.component.html',
  styleUrls: ['./create-lab-status.component.css']
})
export class CreateLabStatusComponent implements OnInit {
  labStatus: LabStatusModel[] = [];
  title: string = 'Estado laboratorio';
  myForm: FormGroup;
  constructor(
    private labStatusHttpService: LabStatusHttpService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
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

  create() {
    this.labStatusHttpService.create(this.myForm.value).subscribe(
      (response) => { }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }
  get stateField() {
    return this.myForm.controls['state'];
  }
  get descriptionField() {
    return this.myForm.controls['description'];
  }
}

