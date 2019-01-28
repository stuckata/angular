import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Subject } from '../subjects/subject.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends RestService {

  private relativeUrl: string = 'subjects';

  constructor(http: HttpClient) {
    super(http);
  }

  getSubjects(): Observable<any> {
    return this.get(this.relativeUrl);
  }

  getSubjectById(id: number): Observable<any> {
    return this.getById(this.relativeUrl, id);
  }

  addSubject(subject: Subject) {
    // // subject.id = Math.floor(Math.random() * 1000) + 1;
    // subject.id = this.subjects.length + 1;
    // this.subjects.push(subject);
    // this.subjectsChanged.emit(this.getSubjects());
  }

  editSubject(subject: Subject) {
    // this.subjectsChanged.emit(this.getSubjects());
  }

  removeSubject(subject: Subject) {
    // let index = this.getSubjects().indexOf(subject);
    // this.subjects.splice(index, 1);
    // this.subjectsChanged.emit(this.getSubjects());
  }
}
