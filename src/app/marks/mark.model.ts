import { Student } from '../students/student.model';
import { Subject } from '../subjects/subject.model';
import { Teacher } from '../teachers/teacher.model';

export class Mark {
    public id: number;
    public value: number;
    public date: Date;
    public subject: Subject;
    public teacher: Teacher;
    public student: Student;

    constructor(id: number, value: number, date: Date, subject: Subject, teacher: Teacher, student: Student) {
        this.id = id;
        this.value = value;
        this.date = date;
        this.subject = subject;
        this.teacher = teacher;
        this.student = student;
    }
}