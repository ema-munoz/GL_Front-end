import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService,
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subjectService.findAll().subscribe(
      data =>{
        this.subjects = data;
      },
    )
  }

  delete(id: number): void{
    console.log(`borrar el ${id}`);
  }
}
