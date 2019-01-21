import { Student } from '../students/student.model';

export class SchoolClass {
    public id: number;
    public name: string;
    public students: Student[];

    constructor(id: number, name: string, students: Student[]) {
        this.id = id;
        this.name = name;
        this.students = students;
    }
}