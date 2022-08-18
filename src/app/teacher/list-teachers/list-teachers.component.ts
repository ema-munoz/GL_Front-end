import { Component, OnInit } from '@angular/core';
import { TeachersModel } from 'src/app/models/teacher.model';
import { TeacherHttpService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  teachers: TeachersModel[] = [];
  title: string = 'Docentes';

  constructor(
    private teacherHttpService: TeacherHttpService,
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.teacherHttpService.index().subscribe(
      response => {
        this.teachers = response.data;
      }
    );
  }

  destroy(id: number) {
    this.teacherHttpService.destroy(id).subscribe(
      response => {
        this.index();
      }
    );
  }
}
