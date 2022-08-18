import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseModel } from '../models/course.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor( private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/courses`;
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number) {

    const url = `${this.API_URL}/careers/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }

  store(course: CourseModel) {

    const url = `${this.API_URL}/courses`;
    return this.httpClient.post<ResponseModel>(url, course);
  }

  update(id: number, course: CourseModel) {

    const url = `${this.API_URL}/courses/${id}`;
    return this.httpClient.put<ResponseModel>(url , course);
  }

  destroy(id: number) {

    const url = `${this.API_URL}/courses/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }

}