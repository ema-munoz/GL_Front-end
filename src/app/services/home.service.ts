import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Teachers } from '../home/Teachers';

@Injectable({
    providedIn: 'root'
})
  export class TeacherService {


    constructor(private http: HttpClient) { }
  
      getAll() {
        return this.http.get<Teachers[]>(`${environment.API_URL}/teachers`);
    }

}
