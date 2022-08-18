import { Component, OnInit } from '@angular/core';
import { LaboratoriesModel } from 'src/app/models/laboratory.model';
import { LaboratoryHttpService } from 'src/app/services/laboratory.service';

@Component({
  selector: 'app-list-laboratory',
  templateUrl: './list-laboratory.component.html',
  styleUrls: ['./list-laboratory.component.css']
})
export class ListLaboratoryComponent implements OnInit {

  laboratories: LaboratoriesModel[] = [];
  title: string = 'Laboratorios';

  constructor(
    private laboratoryHttpService: LaboratoryHttpService,
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.laboratoryHttpService.index().subscribe(
      response =>{
        this.laboratories = response.data;
      }
    );
  }

  show ( id: number){
    this.laboratoryHttpService.show(id).subscribe(
      response => {}
    );
  }

  editClient(id) {
    this.laboratoryHttpService.navigate(['/edit-laboratory', id]);
  }

  destroy(id: number) {
    this.laboratoryHttpService.destroy(id).subscribe(
      response => {
        this.index();
      }
    );
  }

}
