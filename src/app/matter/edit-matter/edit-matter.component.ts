import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectModel } from 'src/app/models/subject.model';
import { SubjectHttpService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-matter',
  templateUrl: './edit-matter.component.html',
  styleUrls: ['./edit-matter.component.css']
})
export class EditMatterComponent implements OnInit {
  subjects: SubjectModel[] = [];
  title: string = 'Editar asignatura';
  myForm: FormGroup;

  constructor(
    private subjectHttpService: SubjectHttpService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route:Router,
  ) {
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.subjectHttpService.findOne(this.router.snapshot.params['id']).subscribe(
      (result) => { 
        console.log (result)
        console.log(result.data.name)
        this.myForm = new FormGroup({
        name: new FormControl(result.data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        career: new FormControl(result.data.acronym, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
      })}
    )
  }

  newForm(): FormGroup {

    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      career: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
    })
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

  update() {

    this.subjectHttpService.update(this.router.snapshot.params['id'], this.myForm.value).subscribe(
      response => {
        this.route.navigate(['list-subject']);
      },
      
    );
  }


  create() {

    this.subjectHttpService.create(this.myForm.value).subscribe(
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

  get careerField() {
    return this.myForm.controls['career'];
  }
}
