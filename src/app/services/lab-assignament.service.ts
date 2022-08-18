import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LabAssignamentModel } from "../models/lab-assignment";
import { ResponseModel } from "../models/response.model";

@Injectable({
    providedIn: 'root'
})
export class LabAssignamentHttpService {
    API_URL: string;

    constructor(private hhtpClient: HttpClient) {
        this.API_URL = environment.API_URL;
    }

    findAll(){
        const url = `${this.API_URL}/detail-lab-subject`
        return this.hhtpClient.get<ResponseModel>(url);
    }

    findOne(id: number){
        const url = `${this.API_URL}/detail-lab-subject/${id}`;
        return this.hhtpClient.get<ResponseModel>(url);
    }

    create(labAsiggnament: LabAssignamentModel){
        const url = `${this.API_URL}/detail-lab-subject`
        return this.hhtpClient.post<ResponseModel>(url, labAsiggnament)
    }

    update(id: number, labAsiggnament: LabAssignamentModel){
        const url = `${this.API_URL}/detail-lab-subject/${id}`
        return this.hhtpClient.put<ResponseModel>(url, labAsiggnament)
    }

    remove(id: number){
        const url = `${this.API_URL}/detail-lab-subject/${id}`
        return this.hhtpClient.delete<ResponseModel>(url)
    }
}