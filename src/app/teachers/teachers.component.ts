import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { TeacherService } from '../services/teacher.service';
import { Subject } from '../subjects/subject.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teachersService: TeacherService) { }

  ngOnInit() {
    this.teachers = this.teachersService.getTeachers();
    this.teachersService.teachersChanged.subscribe((teachers: Teacher[]) => this.teachers = teachers);
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
