import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SchoolClass } from '../school-classes/school-class.model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  endpoint = 'http://localhost:8080/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  classesChanged = new EventEmitter<SchoolClass[]>();

  private classes: SchoolClass[] = [];

  constructor(private studentService: StudentService, private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getClasses(): Observable<any> {
    return this.http.get(this.endpoint + 'classes').pipe(
      map(this.extractData));
  }

  getClassById(id: number): Observable<any> {
    // let tmp = this.getClasses().filter(cl => cl.id === id);
    // if (tmp.length > 0) {
    //   return tmp[0];
    // }
    return this.http.get(this.endpoint + 'classes/' + id).pipe(
      map(this.extractData));
  }
}
