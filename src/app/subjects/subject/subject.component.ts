import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private router: Router, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['/subjects']);
  }

  onAddNewSubjectClick(id: string, name: string) {
    let subject = new Subject(parseInt(id), name);
    this.subjectService.addSubject(subject);
    this.router.navigate(['/subjects']);
  }
}
