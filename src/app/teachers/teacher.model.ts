import { Subject } from '../subjects/subject.model';

export class Teacher {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}