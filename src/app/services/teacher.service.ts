import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { TeachersModel } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor( private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/teachers`;
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number) {

    const url = `${this.API_URL}/teachers/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }

  store(teacher: TeachersModel) {

    const url = `${this.API_URL}/teachers`;
    return this.httpClient.post<ResponseModel>(url, teacher);
  }

  update(id: number, teacher: TeachersModel) {

    const url = `${this.API_URL}/teachers/${id}`;
    return this.httpClient.put<ResponseModel>(url , teacher);
  }

  destroy(id: number) {

    const url = `${this.API_URL}/teachers/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }

}