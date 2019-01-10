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

  addSubject(subject: Subject) {
    this.subjects.push(subject);
    this.subjectsChanged.emit(this.getSubjects());
  }

  editSubject(subject: Subject) {

  }

  removeSubject(subject: Subject) {
    let index = this.getSubjects().indexOf(subject);
    this.subjects.splice(index, 1);
    this.subjectsChanged.emit(this.getSubjects());
  }
}
