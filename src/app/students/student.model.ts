import { SchoolClass } from '../school-classes/school-class.model';

export class Student {
    public id: number;
    public name: string;
    public marks: number[];
    public schoolClass: SchoolClass;

    constructor(id: number, name: string, marks: number[], schoolClass: SchoolClass) {
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.schoolClass = schoolClass;
    }
}