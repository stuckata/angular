export class ClassSubjectTeacher {
    public id: number;
    public classId: number;
    public subjectId: number;
    public teacherId: number;

    constructor(id: number, classId: number, subjectId: number, teacherId: number) {
        this.id = id;
        this.classId = classId;
        this.subjectId = subjectId;
        this.teacherId = teacherId;
    }
}