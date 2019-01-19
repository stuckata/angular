import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private schoolClassService: SchoolClassService, private subjectService: SubjectService) { }

  ngOnInit() {
    this.classes = this.schoolClassService.getClasses();
    this.schoolClassService.classesChanged.subscribe((classes: SchoolClass[]) => this.classes = classes);
    this.subjects = this.subjectService.getSubjects();
    this.subjectService.subjectsChanged.subscribe((subjects: Subject[]) => this.subjects = subjects);
  }

  onClassChange(id: number) {
    console.log('onClassChange => id: ' + id);
  }

  onSubjectChange(id: number) {
    console.log('onSubjectChange => id: ' + id);
  }
}
