import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LabStatus } from 'src/app/models/lab-status.model';
import { LabStatusService } from 'src/app/services/lab-status.service';

@Component({
  selector: 'app-create-lab-status',
  templateUrl: './create-lab-status.component.html',
  styleUrls: ['./create-lab-status.component.css']
})
export class CreateLabStatusComponent implements OnInit {

  // state = true;
  // description = '';
  // constructor(
  //   private labStatusService: LabStatusService,
  // ) { }

  // ngOnInit(): void {
  // }

  // onCreate():void{
  //   const labStatus= new LabStatus(this.state, this.description)
  //   this.labStatusService.create(labStatus).subscribe(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // }
  labStatus: LabStatus[] = [];
  myForm: FormGroup;
  constructor(
    private labStatusService: LabStatusService,
    private formBuilder:FormBuilder
  ){
    this.myForm = this.newForm();
  }

  ngOnInit(): void {
  }

  
}
