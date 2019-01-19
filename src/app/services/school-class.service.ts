import { Injectable, EventEmitter } from '@angular/core';

import { SchoolClass } from '../school-classes/school-class.model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  classesChanged = new EventEmitter<SchoolClass[]>();

  private classes: SchoolClass[] = [
    new SchoolClass(1, '10d', [
      this.studentService.getStudentById(1), this.studentService.getStudentById(2), this.studentService.getStudentById(3)
    ], []),
    new SchoolClass(2, '12e', [
      this.studentService.getStudentById(4), this.studentService.getStudentById(5), this.studentService.getStudentById(6)
    ], []),
    new SchoolClass(3, '8a', [
      this.studentService.getStudentById(7), this.studentService.getStudentById(8), this.studentService.getStudentById(9)
    ], []),
  ];

  constructor(private studentService: StudentService) { }

  getClasses() {
    return this.classes.slice();
  }

  getClassById(id: number) {
    let tmp = this.getClasses().filter(cl => cl.id === id);
    if (tmp.length > 0) {
      return tmp[0];
    }
  }
}
