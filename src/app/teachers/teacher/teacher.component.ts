import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from '../teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/subjects/subject.model';
import { ClassSubjectTeacherService } from 'src/app/services/class-subject-teacher.service';
import { ClassSubjectTeacher } from 'src/app/class-subject-teacher/class-subject-teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacher: Teacher;
  @Input() selectionSubjects: { subject: Subject, checked: boolean }[];
  subjects: Subject[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private subjectService: SubjectService,
    private classSubjectTeacherService: ClassSubjectTeacherService
  ) { }

  ngOnInit() {
    this.selectionSubjects = [];
    this.selectionSubjects = this.checkSubjects([]);
    this.subjectService.getSubjects().subscribe((data: Subject[]) => this.subjects = data);

    this.teacher = new Teacher(0, '');

    if (this.route.snapshot) {
      let id = +this.route.snapshot.params['id'];
      if (id > 0) {
        this.teacherService.getTeacherById(id)
          .subscribe((data: Teacher) => { this.teacher = data; this.onTeacherLoaded() });
      }
    }
  }

  onTeacherLoaded() {
    this.classSubjectTeacherService
      .getAllSubjectIdsByTeacherId(this.teacher.id)
      .subscribe((data: number[]) => this.onTeacherSubjectsLoaded(data));
  }

  onTeacherSubjectsLoaded(teacherSubjectIds: number[]) {
    this.selectionSubjects = this.checkSubjects(teacherSubjectIds);
  }

  // onSaveClick() {
  //   if (this.isEditMode()) {
  //     this.teacherService.editTeacher(this.teacher);
  //   } else {
  //     let filtered = (this.selectionSubjects.filter(el => el.checked === true));
  //     let selected = filtered.map(el => el.subject);
  //     this.teacherService.addTeacher(this.teacher, selected);
  //   }
  //   this.router.navigate(['/teachers']);
  // }

  onCancelClick() {
    this.router.navigate(['/teachers']);
  }

  isEditMode() {
    return this.teacher.id !== 0;
  }

  checkSubjects(teacherSubjectIds: number[]): { subject: Subject, checked: boolean }[] {
    this.selectionSubjects = [];

    for (let i = 0; i < this.subjects.length; i++) {
      let checked: boolean = false;
      for (let j = 0; j < teacherSubjectIds.length; j++) {
        if (teacherSubjectIds[j] === this.subjects[i].id) {
          checked = true;
        }
      }
      // let index = teacherSubjects.indexOf(this.subjects[i].id);
      // let checked = index > -1;
      this.selectionSubjects.push({ subject: this.subjects[i], checked: checked });
    }
    return this.selectionSubjects;
  }
}
