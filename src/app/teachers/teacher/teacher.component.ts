import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from '../teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/subjects/subject.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacher: Teacher;
  @Input() selectionSubjects: { subject: Subject, checked: boolean }[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private subjectService: SubjectService) { }

  ngOnInit() {
    this.selectionSubjects = [];
    let teacherSubjects: Subject[] = [];

    this.teacher = new Teacher(0, '', []);
    if (this.route.snapshot) {
      let id = +this.route.snapshot.params['id'];
      if (id > 0) {
        let tmpTeacher = this.teacherService.getTeacherById(id);
        if (tmpTeacher) {
          this.teacher = tmpTeacher;
          teacherSubjects = this.teacher.subjects;
        }
      }
    }
    this.selectionSubjects = this.checkSubjects(teacherSubjects);
  }

  onSaveClick() {
    if (this.isEditMode()) {
      this.teacherService.editTeacher(this.teacher);
    } else {
      let filtered = (this.selectionSubjects.filter(el => el.checked === true));
      let selected = filtered.map(el => el.subject);
      this.teacherService.addTeacher(this.teacher, selected);
    }
    this.router.navigate(['/teachers']);
  }

  onCancelClick() {
    this.router.navigate(['/teachers']);
  }

  isEditMode() {
    return this.teacher.id !== 0;
  }

  checkSubjects(teacherSubjects: Subject[]): { subject: Subject, checked: boolean }[] {
    this.selectionSubjects = [];
    let allSubjects = this.subjectService.getSubjects();
    for (let i = 0; i < allSubjects.length; i++) {
      let index = teacherSubjects.indexOf(allSubjects[i]);
      let checked = index > -1;
      this.selectionSubjects.push({ subject: allSubjects[i], checked: checked });
    }
    return this.selectionSubjects;
  }
}
