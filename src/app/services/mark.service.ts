import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mark } from '../marks/mark.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class MarkService extends RestService {

  private relativeUrl: string = 'marks';

  constructor(http: HttpClient) {
    super(http);
  }

  getMarksByClassIdAndSubjectId(classId: number, subjectId: number): Observable<Mark[]> {
    return this.getByTwoDifferentIds(this.relativeUrl, classId, subjectId);
  }

  getMarks(): Observable<Mark[]> {
    return this.get(this.relativeUrl);
  }

  getMarkById(id: number): Observable<any> {
    return this.getById(this.relativeUrl, id);
  }
}
