import { Injectable, EventEmitter } from '@angular/core';

import { Teacher } from '../teachers/teacher.model';
import { SubjectService } from './subject.service';

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
}
