export interface ListSubjectTeacherModel {
    id?: number;
    course: string;
    teacher: string;
    subject: string;
    date: Date;
    day: string;
    hourStart: string;
    hourFinish: string;
    authdata?: string
}
