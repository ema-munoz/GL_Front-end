import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CareersModel } from '../models/career.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CareerHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor( private httpClient:HttpClient) { 
    this.API_URL = environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/careers`;
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number) {

    const url = `${this.API_URL}/careers/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }

  store(career: CareersModel) {

    const url = `${this.API_URL}/careers`;
    return this.httpClient.post<ResponseModel>(url, career);
  }

  update(id: number, career: CareersModel) {

    const url = `${this.API_URL}/careers/${id}`;
    return this.httpClient.put<ResponseModel>(url , career);
  }

  destroy(id: number) {

    const url = `${this.API_URL}/careers/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }

}