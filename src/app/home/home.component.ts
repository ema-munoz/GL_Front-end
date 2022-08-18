import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TeacherService } from '../services/home.service';
import { Teachers } from './Teachers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  loading = false;
  teachers: Teachers[];

  constructor( 
    private teacherService: TeacherService
    ) {}

  ngOnInit(): void {
    this.teacherService.getAll().pipe(first()).subscribe(teachers => {
            this.loading = false;
            this.teachers = teachers;
        });
  }
}
