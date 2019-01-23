import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Subject } from '../subjects/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectsChanged = new EventEmitter<Subject[]>();

  endpoint = 'http://localhost:8080/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getSubjects(): Observable<any> {
    return this.http.get(this.endpoint + 'subjects').pipe(
      map(this.extractData));
  }

  getSubjectById(id: number) {
    return this.http.get(this.endpoint + 'subjects/' + id).pipe(
      map(this.extractData));
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
