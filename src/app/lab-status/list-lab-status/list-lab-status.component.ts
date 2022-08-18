import { Component, OnInit } from '@angular/core';
import { LabStatusModel } from 'src/app/models/lab-status.model';
import { LabStatusHttpService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-list-lab-status',
  templateUrl: './list-lab-status.component.html',
  styleUrls: ['./list-lab-status.component.css']
})
export class ListLabStatusComponent implements OnInit {
  labStatus: LabStatusModel[] = [];
  constructor(
    private labStatusHttpService: LabStatusHttpService,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.labStatusHttpService.findAll().subscribe((response) => {
      this.labStatus = response.data;
    });
  }

  remove(id: number) {
    this.labStatusHttpService.remove(id).subscribe(
      response => {
        this.findAll();
      }
    );
  }
}
