import { Injectable, EventEmitter } from '@angular/core';

import { Teacher } from '../teachers/teacher.model';
import { SubjectService } from './subject.service';
import { Subject } from '../subjects/subject.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachersChanged = new EventEmitter<Teacher[]>();

  private teachers: Teacher[] = [
    new Teacher(1, 'Ivan Ivanov', [this.subjectSurvice.getSubjectById(1), this.subjectSurvice.getSubjectById(2)]),
    new Teacher(2, 'John Doe', [this.subjectSurvice.getSubjectById(2)]),
    new Teacher(3, 'Fido Mido', [this.subjectSurvice.getSubjectById(3)])
  ];

  constructor(private subjectSurvice: SubjectService) { }

  getTeachers() {
    return this.teachers.slice();
  }

  addTeacher(teacher: Teacher, subjects: Subject[]) {
    teacher.id = this.teachers.length + 1;
    teacher = this.addSubjects(teacher, subjects);
    this.teachers.push(teacher);
    this.teachersChanged.emit(this.getTeachers());
  }

  editTeacher(teacher: Teacher) {
    this.teachersChanged.emit(this.getTeachers());
  }

  getTeacherById(id: number) {
    let tmp = this.getTeachers().filter(teacher => teacher.id === id);
    if (tmp.length > 0) {
      return tmp[0];
    }
  }

  removeTeacher(teacher: Teacher) {
    let index = this.getTeachers().indexOf(teacher);
    this.teachers.splice(index, 1);
    this.teachersChanged.emit(this.getTeachers());
  }

  addSubjects(teacher: Teacher, subjects: Subject[]) {
    for (let i = 0; i < subjects.length; i++) {
      teacher.subjects.push(subjects[i]);
    }
    return teacher;
  }
}
