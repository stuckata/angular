import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SchoolClass } from '../school-classes/school-class.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService extends RestService {

  private relativeUrl: string = 'classes';

  getClasses(): Observable<SchoolClass[]> {
    return this.get(this.relativeUrl);
  }

  getClassById(id: number): Observable<SchoolClass> {
    return this.getById(this.relativeUrl, id);
  }
}
