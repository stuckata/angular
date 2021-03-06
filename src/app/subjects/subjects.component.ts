import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubjectService } from '../services/subject.service';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe((data: Subject[]) => this.subjects = data);
  }

  onRemoveClick(subject: Subject) {
    this.subjectService.removeSubject(subject);
  }

  onEditClick(subject: Subject) {
    this.router.navigate(['/subject', subject.id]);
  }
}
