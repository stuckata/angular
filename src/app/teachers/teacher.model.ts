import { Subject } from '../subjects/subject.model';

export class Teacher {
    public id: number;
    public name: string;
    public subjects: Subject[];

    constructor(id: number, name: string, subjects: Subject[]) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }
}