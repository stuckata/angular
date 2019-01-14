import { Injectable, EventEmitter } from '@angular/core';

import { Subject } from '../subjects/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectsChanged = new EventEmitter<Subject[]>();

  private subjects: Subject[] = [
    new Subject(1, 'Mathematics'),
    new Subject(2, 'Physics'),
    new Subject(3, 'Literature')
  ];

  constructor() { }

  getSubjects() {
    return this.subjects.slice();
  }

  getSubjectById(id: number) {
    let tmp = this.getSubjects().filter(subject => subject.id === id);
    if (tmp.length > 0) {
      return tmp[0];
    }
  }

  addSubject(subject: Subject) {
    // subject.id = Math.floor(Math.random() * 1000) + 1;
    subject.id = this.subjects.length + 1;
    this.subjects.push(subject);
    this.subjectsChanged.emit(this.getSubjects());
  }

  editSubject(subject: Subject) {
    this.subjectsChanged.emit(this.getSubjects());
  }

  removeSubject(subject: Subject) {
    let index = this.getSubjects().indexOf(subject);
    this.subjects.splice(index, 1);
    this.subjectsChanged.emit(this.getSubjects());
  }
}
