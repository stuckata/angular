import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RestService } from './rest.service';
import { ClassSubjectTeacher } from '../class-subject-teacher/class-subject-teacher.model';

@Injectable({
  providedIn: 'root'
})
export class ClassSubjectTeacherService extends RestService {

  private relativeUrl: string = 'class-subject-teacher';

  constructor(http: HttpClient) {
    super(http);
  }

  getClassSubjectTeachers(): Observable<ClassSubjectTeacher[]> {
    return this.get(this.relativeUrl);
  }

  getClassSubjectTeacherByClassId(classId: number): Observable<ClassSubjectTeacher> {
    return this.getById(this.relativeUrl + '-by-class', classId);
  }

  getClassSubjectTeacherBySubjectId(subjectId: number): Observable<ClassSubjectTeacher> {
    return this.getById(this.relativeUrl + '-by-subject', subjectId);
  }

  getClassSubjectTeacherByTeacherId(teacherId: number): Observable<ClassSubjectTeacher> {
    return this.getById(this.relativeUrl + '-by-teacher', teacherId);
  }
}
