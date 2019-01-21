import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SchoolClass } from '../school-classes/school-class.model';
import { Subject } from '../subjects/subject.model';
import { SchoolClassService } from '../services/school-class.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classes: SchoolClass[];
  subjects: Subject[];
  classId: number = 0;
  subjectId: number = 0;
  showWarning: boolean;

  constructor(
    private schoolClassService: SchoolClassService,
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showWarning = false;
    this.classes = [];
    this.schoolClassService.getClasses().subscribe((data: SchoolClass[]) => {
      this.classes = data;
    });
    this.schoolClassService.classesChanged.subscribe((classes: SchoolClass[]) => this.classes = classes);
    this.subjects = this.subjectService.getSubjects();
    this.subjectService.subjectsChanged.subscribe((subjects: Subject[]) => this.subjects = subjects);
  }

  onClassChange(id: number) {
    this.classId = id;
  }

  onSubjectChange(id: number) {
    this.subjectId = id;
  }

  onChooseClassAndSubjectClick() {
    if (this.classId > 0 && this.subjectId > 0) {
      this.router.navigate(['/class', this.classId, this.subjectId]);
    } else {
      this.showWarning = true;
    }
  }
}
