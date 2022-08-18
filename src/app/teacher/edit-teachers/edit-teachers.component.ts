import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersModel } from 'src/app/models/teacher.model';
import { TeacherHttpService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teachers',
  templateUrl: './edit-teachers.component.html',
  styleUrls: ['./edit-teachers.component.css']
})
export class EditTeachersComponent implements OnInit {

  careers: TeachersModel[] = [];
  title: string = 'Editar Docente';
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
    console.log(this.router.snapshot.params['id'])
    this.teacherHttpService.show(this.router.snapshot.params['id']).subscribe(
      (result) => { 
        console.log (result)
        console.log(result.data.name)
        this.myForm = new FormGroup({
        identificationCard:new FormControl(result.data.identificationCard, [Validators.required, Validators.minLength(2), Validators.maxLength(11)]),
        names: new FormControl(result.data.names, [Validators.required, Validators.minLength(2)]),
        surnames: new FormControl(result.data.surnames, [Validators.required, Validators.minLength(2)]),
        institutionalEmail: new FormControl(result.data.institutionalEmail, [ Validators.required, Validators.email]),
        phone: new FormControl(result.data.phone, [ Validators.minLength(2), Validators.maxLength(20)])
      })}
    )
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      identificationCard:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(11)]],
      names: [null, [Validators.required, Validators.minLength(2)]],
      surnames: [null, [Validators.required, Validators.minLength(2)]],
      institutionalEmail: [null, [ Validators.email]],
      phone: [null, [ Validators.minLength(2), Validators.maxLength(20)]],
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

    this.teacherHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-teachers']);
      },
      
    );
  }
 

  store() {

    this.teacherHttpService.store(this.myForm.value).subscribe(
      response => {
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
