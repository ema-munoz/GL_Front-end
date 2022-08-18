import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Subject } from '../models/subject.model';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  API_URL: string;

  constructor(private hhtpClient: HttpClient) {
    this.API_URL= environment.API_URL;
  }

  index() {

    const url = `${this.API_URL}/subjects`;
    return this.hhtpClient.get<ResponseModel>(url);
  }

  public create(subject: Subject): Observable<Subject>{
    return this.hhtpClient.post<Subject>(`${this.API_URL}/subjects`, subject);
  }
}
