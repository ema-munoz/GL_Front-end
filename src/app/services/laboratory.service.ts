import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LaboratoriesModel } from '../models/laboratory.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryHttpService {
  navigate(arg0: any[]) {
    throw new Error('Method not implemented.');
  }
  API_URL: string;

  constructor( private httpClient:HttpClient) {
    this.API_URL = environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/laboratories`;
    return this.httpClient.get<ResponseModel>(url);
  }

  show(id: number) {

    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }

  store(laboratory: LaboratoriesModel) {

    const url = `${this.API_URL}/laboratories`;
    return this.httpClient.post<ResponseModel>(url, laboratory);
  }

  update(id: number, laboratory: LaboratoriesModel) {

    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.put<ResponseModel>(url , laboratory);
  }

  destroy(id: number) {

    const url = `${this.API_URL}/laboratories/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }

}
