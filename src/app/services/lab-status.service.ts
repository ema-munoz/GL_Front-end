import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LabStatus } from '../models/lab-status.model';

@Injectable({
    providedIn: 'root'
})
export class LabStatusService {
    API_URL: string;

    constructor(private hhtpClient: HttpClient) {
        this.API_URL = environment.API_URL;
    }

    // public findAll(): Observable<LabStatus[]> {
    //     return this.hhtpClient.get<LabStatus[]>(`${this.API_URL}/state-laboratories`);
    // }

    // public create(labStatus: LabStatus): Observable<LabStatus> {
    //     return this.hhtpClient.post<LabStatus>(`${this.API_URL}/state-laboratories`, labStatus);
    // }

    // public update(labStatus: LabStatus): Observable<LabStatus> {
    //     return this.hhtpClient.put<LabStatus>(`${this.API_URL}/state-laboratories/`, labStatus);
    // }

    findAll(){
        const url = `${this.API_URL}/state-laboratories`
        return this.hhtpClient.get<LabStatus>(url);
    }

    create(labStatus: LabStatus){
        const url = `${this.API_URL}/state-laboratories`
        return this.hhtpClient.post<LabStatus>(url, labStatus)
    }

    update(id: number, labStatus: LabStatus){
        const url = `${this.API_URL}/state-laboratories/${id}`
        return this.hhtpClient.put<LabStatus>(url, labStatus)
    }

    remove(id: number){
        const url = `${this.API_URL}/state-laboratories/${id}`
        return this.hhtpClient.delete<LabStatus>(url)
    }
}