import { Mark } from '../marks/mark.model';

export class Student {
    public id: number;
    public no: number;
    public name: string;

    constructor(id: number, no: number, name: string) {
        this.id = id;
        this.no = no;
        this.name = name;
    }
}