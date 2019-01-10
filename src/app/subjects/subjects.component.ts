import { Component, OnInit } from '@angular/core';
import { Subject } from './subject.model';

import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
    this.subjectService.subjectsChanged.subscribe((subjects: Subject[]) => this.subjects = subjects);
  }
}
