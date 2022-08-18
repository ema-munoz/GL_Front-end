import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CareersModel } from '../models/career.model';
import { ListSubjectTeacherModel } from '../models/listSubjectTeacher.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ListSubjectTeacherHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor( private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/detail-teacher-subject`;
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number) {

    const url = `${this.API_URL}/detail-teacher-subject/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }

  store(listSubjectTeacher: ListSubjectTeacherModel) {

    const url = `${this.API_URL}/detail-teacher-subject`;
    return this.httpClient.post<ResponseModel>(url, listSubjectTeacher);
  }

  update(id: number, listSubjectTeacher: ListSubjectTeacherModel) {

    const url = `${this.API_URL}/detail-teacher-subject/${id}`;
    return this.httpClient.put<ResponseModel>(url , listSubjectTeacher);
  }

  destroy(id: number) {

    const url = `${this.API_URL}/detail-teacher-subject/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }

}