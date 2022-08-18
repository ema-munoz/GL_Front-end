import { Component, OnInit } from '@angular/core';
import { LabStatus } from 'src/app/models/lab-status.model';
import { LabStatusService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-list-lab-status',
  templateUrl: './list-lab-status.component.html',
  styleUrls: ['./list-lab-status.component.css']
})
export class ListLabStatusComponent implements OnInit {
labStatus: LabStatus[] = [];
  constructor(
    private labStatusService: LabStatusService,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.labStatusService.findAll().subscribe((response) => {
      this.labStatus = response.data;
    });
  }
}
