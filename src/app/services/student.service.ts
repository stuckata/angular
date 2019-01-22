import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student } from '../students/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsChanged = new EventEmitter<Student[]>();

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

  getStudents(): Observable<any> {
    return this.http.get(this.endpoint + 'students').pipe(
      map(this.extractData));
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(this.endpoint + 'students/' + id).pipe(
      map(this.extractData));
  }
}
