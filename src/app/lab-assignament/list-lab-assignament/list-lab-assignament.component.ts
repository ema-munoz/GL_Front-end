import { Component, OnInit } from '@angular/core';
import { LabAssignamentModel } from 'src/app/models/lab-assignment';
import { LabAssignamentHttpService } from 'src/app/services/lab-assignament.service';

@Component({
  selector: 'app-list-lab-assignament',
  templateUrl: './list-lab-assignament.component.html',
  styleUrls: ['./list-lab-assignament.component.css']
})
export class ListLabAssignamentComponent implements OnInit {
  labAssignaments: LabAssignamentModel[] = [];
  title: string = 'Asignacion Laboratorio'
  constructor(
    private labAssignamentHttpService: LabAssignamentHttpService,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.labAssignamentHttpService.findAll().subscribe((response) => {
      this.labAssignaments = response.data;
    });
  }

  remove(id: number) {
    this.labAssignamentHttpService.remove(id).subscribe(
      response => {
        this.findAll();
      }
    );
  }
}
