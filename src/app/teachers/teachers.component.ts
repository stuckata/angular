import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from './teacher.model';
import { Subject } from '../subjects/subject.model';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private teachersService: TeacherService, private router: Router) { }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe((data: Teacher[]) => this.teachers = data);
  }

  onRemoveClick(teacher: Teacher) {
    // this.teachersService.removeTeacher(teacher);
  }

  onEditClick(teacher: Teacher) {
    this.router.navigate(['/teacher', teacher.id]);
  }

  subjectsToString(subjects: Subject[]): string {
    let result: string = '';
    for (let i = 0; i < subjects.length; i++) {
      if (i !== subjects.length - 1) {
        result += subjects[i].name + ', ';
      } else {
        result += subjects[i].name;
      }
    }
    return result;
  }
}
