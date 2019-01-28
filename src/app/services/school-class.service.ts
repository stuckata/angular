import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SchoolClass } from '../school-classes/school-class.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService extends RestService {

  private relativeUrl: string = 'classes';

  constructor(http: HttpClient) {
    super(http);
  }

  getClasses(): Observable<SchoolClass[]> {
    return this.get(this.relativeUrl);
  }

  getClassById(id: number): Observable<SchoolClass> {
    return this.getById(this.relativeUrl, id);
  }
}
