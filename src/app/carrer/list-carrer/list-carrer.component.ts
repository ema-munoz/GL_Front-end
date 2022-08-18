import { Component, OnInit } from '@angular/core';
import { CareersModel } from 'src/app/models/career.model';
import { CareerHttpService } from 'src/app/services/career.service';

@Component({
  selector: 'app-list-carrer',
  templateUrl: './list-carrer.component.html',
  styleUrls: ['./list-carrer.component.css']
})
export class ListCarrerComponent implements OnInit {

  careers: CareersModel[] = [];
  title: string = 'Carreras';
  constructor(
    private careerHttpService:CareerHttpService,
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.careerHttpService.index().subscribe(
      response => {
        this.careers = response.data;
      }
    );
  }
}
