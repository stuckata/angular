import { Injectable } from '@angular/core';

import { Mark } from '../marks/mark.model';
import { SubjectService } from './subject.service';
import { TeacherService } from './teacher.service';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private marks: Mark[] = [];

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private studentService: StudentService
  ) { }
}
