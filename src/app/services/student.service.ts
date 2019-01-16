import { Injectable } from '@angular/core';

import { Student } from '../students/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    new Student(1, 'Gancho Mancho', []),
    new Student(2, 'Petko Metko', []),
    new Student(3, 'Pedya Chovek', []),
    new Student(4, 'Hitar Petar', []),
    new Student(5, 'Kumcho Valcho', []),
    new Student(6, 'Zaio Baio', []),
    new Student(7, 'Kuma Lisa', []),
    new Student(8, 'Baba Meca', []),
    new Student(9, 'Ejko Bejko', [])
  ];

  constructor() { }

  getStudents() {
    return this.students.slice();
  }

  getStudentById(id: number) {
    let tmp = this.getStudents().filter(student => student.id === id);
    if (tmp.length > 0) {
      return tmp[0];
    }
  }
}
