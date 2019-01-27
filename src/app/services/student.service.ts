import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends RestService {

  private relativeUrl: string = 'students';

  getStudents(): Observable<any> {
    return this.get(this.relativeUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.getById(this.relativeUrl, id);
  }
}
