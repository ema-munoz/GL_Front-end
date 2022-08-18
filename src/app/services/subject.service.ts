import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SubjectModel } from '../models/subject.model';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectHttpService {
  API_URL: string;

  constructor(private hhtpClient: HttpClient) {
    this.API_URL = environment.API_URL;
}

findAll(){
    const url = `${this.API_URL}/subjects`
    return this.hhtpClient.get<ResponseModel>(url);
}

findOne(id: number){
    const url = `${this.API_URL}/subjects/${id}`;
    return this.hhtpClient.get<ResponseModel>(url);
}

create(subject: SubjectModel){
    const url = `${this.API_URL}/subjects`
    return this.hhtpClient.post<ResponseModel>(url, subject)
}

update(id: number, subject: SubjectModel){
    const url = `${this.API_URL}/subjects/${id}`
    return this.hhtpClient.put<ResponseModel>(url, subject)
}

remove(id: number){
    const url = `${this.API_URL}/subjects/${id}`
    return this.hhtpClient.delete<ResponseModel>(url)
}
}
