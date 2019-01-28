import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getMarkById(id: number): Observable<Mark> {
    return this.getById(this.relativeUrl, id);
  }
}
