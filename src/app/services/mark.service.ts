import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mark } from '../marks/mark.model';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  marksChanged = new EventEmitter<Mark[]>();

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

  getMarksByClassIdAndSubjectId(classId: number, subjectId: number): Observable<any> {
    return this.http.get(this.endpoint + 'marks/' + classId + '/' + subjectId).pipe(
      map(this.extractData));
  }

  getMarks(): Observable<any> {
    return this.http.get(this.endpoint + 'marks').pipe(
      map(this.extractData));
  }

  getMarkById(id: number): Observable<any> {
    return this.http.get(this.endpoint + 'marks/' + id).pipe(
      map(this.extractData));
  }
}
