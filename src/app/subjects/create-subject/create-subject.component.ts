import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  name = '';
  constructor(
    private subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const subject = new Subject(this.name)
    this.subjectService.create(subject).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
