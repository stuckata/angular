import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends RestService {

  private relativeUrl: string = 'students';

  constructor(http: HttpClient) {
    super(http);
  }

  getStudents(): Observable<any> {
    return this.get(this.relativeUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.getById(this.relativeUrl, id);
  }
}
