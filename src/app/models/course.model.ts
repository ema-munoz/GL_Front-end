export interface CourseModel {
    id?: number;
    name: string;
    numberStudents: number;
    semester: number;
    career: string;
    parallel: string;
    shift: string;
    authdata?: string
}