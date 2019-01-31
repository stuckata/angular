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

  getAllClassSubjectTeachers(): Observable<ClassSubjectTeacher[]> {
    return this.get(this.relativeUrl);
  }

  getAllSubjectIdsByTeacherId(teacherId: number): Observable<number[]> {
    return this.getById('subjects-by-teacher', teacherId);
  }

  getAllClassSubjectTeachersByClassId(classId: number): Observable<ClassSubjectTeacher[]> {
    return this.getById(this.relativeUrl + '-by-class', classId);
  }

  getAllClassSubjectTeachersBySubjectId(subjectId: number): Observable<ClassSubjectTeacher[]> {
    return this.getById(this.relativeUrl + '-by-subject', subjectId);
  }

  getAllClassSubjectTeachersByTeacherId(teacherId: number): Observable<ClassSubjectTeacher[]> {
    console.log('az beh tuka');
    let res: Observable<ClassSubjectTeacher[]> = this.getById(this.relativeUrl + '-by-teacher', teacherId);
    return res;
  }
}
