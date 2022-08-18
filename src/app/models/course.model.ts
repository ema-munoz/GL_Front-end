export interface CourseModel {
    id?: number;
    name: string;
    numberStudents:string;
    semesters:number;
    career: string;
    parallel: string;
    shift: string;
    authdata?: string
}