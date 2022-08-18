import { CareersModel } from "./career.model";

export interface SubjectModel {
    id?: number;
    name?: string;
    career?: CareersModel;
}