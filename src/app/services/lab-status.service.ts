import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { LabStatusModel } from '../models/lab-status.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
    providedIn: 'root'
})
export class LabStatusHttpService {
    API_URL: string;

    constructor(private hhtpClient: HttpClient) {
        this.API_URL = environment.API_URL;
    }

    findAll(){
        const url = `${this.API_URL}/state-laboratories`
        return this.hhtpClient.get<ResponseModel>(url);
    }

    findOne(id: number){
        const url = `${this.API_URL}/state-laboratories/${id}`;
        return this.hhtpClient.get<ResponseModel>(url);
    }

    create(labStatus: LabStatusModel){
        const url = `${this.API_URL}/state-laboratories`
        return this.hhtpClient.post<ResponseModel>(url, labStatus)
    }

    update(id: number, labStatus: LabStatusModel){
        const url = `${this.API_URL}/state-laboratories/${id}`
        return this.hhtpClient.put<ResponseModel>(url, labStatus)
    }

    remove(id: number){
        const url = `${this.API_URL}/state-laboratories/${id}`
        return this.hhtpClient.delete<ResponseModel>(url)
    }
}