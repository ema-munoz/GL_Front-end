import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectModel } from 'src/app/models/subject.model';
import { SubjectHttpService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-create-matter',
  templateUrl: './create-matter.component.html',
  styleUrls: ['./create-matter.component.css']
})
export class CreateMatterComponent implements OnInit {
  subjects: SubjectModel[] = [];
  title: string = 'Crear asignatura';
  myForm: FormGroup;
  constructor(
    private subjectHttpService: SubjectHttpService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      name: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]
      ],
      career: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ]
    });
  }

  create() {
    this.subjectHttpService.create(this.myForm.value).subscribe(
      (response) => { }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get careerField() {
    return this.myForm.controls['career'];
  }


}
