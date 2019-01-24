import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Teacher } from '../teachers/teacher.model';
import { SubjectService } from './subject.service';
import { Subject } from '../subjects/subject.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachersChanged = new EventEmitter<Teacher[]>();

  endpoint = 'http://localhost:8080/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private subjectSurvice: SubjectService, private http: HttpClient) { }

  extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getTeachers(): Observable<any> {
    return this.http.get(this.endpoint + 'teachers').pipe(
      map(this.extractData));
  }

  getTeacherById(id: number): Observable<any> {
    return this.http.get(this.endpoint + 'teachers/' + id).pipe(
      map(this.extractData));
  }

  // addSubjects(teacher: Teacher, subjects: Subject[]) {
  //   for (let i = 0; i < subjects.length; i++) {
  //     teacher.subjects.push(subjects[i]);
  //   }
  //   return teacher;
  // }
}
