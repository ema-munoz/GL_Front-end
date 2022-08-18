import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabAssignamentModel } from 'src/app/models/lab-assignment';
import { LabAssignamentHttpService } from 'src/app/services/lab-assignament.service';

@Component({
  selector: 'app-create-lab-assignament',
  templateUrl: './create-lab-assignament.component.html',
  styleUrls: ['./create-lab-assignament.component.css']
})
export class CreateLabAssignamentComponent implements OnInit {
  labAssignaments: LabAssignamentModel[] = [];
  title: string = 'Nueva Asignacion';
  myForm: FormGroup;

  constructor(
    private labAssignamentHttpService: LabAssignamentHttpService,
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
      teacher: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      laboratory: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      date: [null]
    })
  }

  create() {
    this.labAssignamentHttpService.create(this.myForm.value).subscribe(
      response => { this.route.navigate(['list-lab-assignament']); }
    );
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get teacherField() {
    return this.myForm.controls['teacher'];
  }

  get laboratoryField() {
    return this.myForm.controls['laboratory'];
  }

  get dateField() {
    return this.myForm.controls['date'];
  }

}
