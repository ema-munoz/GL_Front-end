import { Component, OnInit } from '@angular/core';
import { SubjectModel } from 'src/app/models/subject.model';
import { SubjectHttpService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-list-matter',
  templateUrl: './list-matter.component.html',
  styleUrls: ['./list-matter.component.css']
})
export class ListMatterComponent implements OnInit {
  subjects: SubjectModel[] = []
  constructor(
    private subjectHttpService: SubjectHttpService,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.subjectHttpService.findAll().subscribe((response)=>{
      this.subjects = response.data;
    })
  }

  remove(id: number) {
    this.subjectHttpService.remove(id).subscribe(
      response => {
        this.findAll();
      }
    );
  }
}
