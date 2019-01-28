import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../teachers/teacher.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends RestService {

  private relativeUrl: string = 'teachers';

  constructor(http: HttpClient) {
    super(http);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.get(this.relativeUrl);
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.getById(this.relativeUrl, id);
  }

  // addSubjects(teacher: Teacher, subjects: Subject[]) {
  //   for (let i = 0; i < subjects.length; i++) {
  //     teacher.subjects.push(subjects[i]);
  //   }
  //   return teacher;
  // }
}
