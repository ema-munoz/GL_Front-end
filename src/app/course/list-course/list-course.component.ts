import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course.model';
import { CourseHttpService } from 'src/app/services/course.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courses: CourseModel[] = [];
  title: string = 'Cursos';
  


  constructor(
    private courseHttpService: CourseHttpService,
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.courseHttpService.index().subscribe(
      response => {
        this.courses = response.data;
      }
    );
  }

  show(id: number) {
    this.courseHttpService.show(id).subscribe(
      response => {

      }
    );
  }

  editClient(id) {
    this.courseHttpService.navigate(['/edit-course', id]);
  }

  destroy(id: number) {
    this.courseHttpService.destroy(id).subscribe(
      response => {
        this.index();
      }
    );
  }

}
