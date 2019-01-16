import { Student } from '../students/student.model';
import { Subject } from '../subjects/subject.model';

export class SchoolClass {
    public id: number;
    public name: string;
    public students: Student[];
    public schedule: Subject[];

    constructor(id: number, name: string, students: Student[], schedule: Subject[]) {
        this.id = id;
        this.name = name;
        this.students = students;
        this.schedule = schedule;
    }
}