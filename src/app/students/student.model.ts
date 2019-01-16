import { SchoolClass } from '../school-classes/school-class.model';

export class Student {
    public id: number;
    public name: string;
    public marks: number[];

    constructor(id: number, name: string, marks: number[]) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}