import { Mark } from '../marks/mark.model';

export class Student {
    public id: number;
    public name: string;
    public markbook: Mark[];

    constructor(id: number, name: string, markbook: Mark[]) {
        this.id = id;
        this.name = name;
        this.markbook = markbook;
    }
}