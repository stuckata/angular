import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() subject: Subject;

  constructor(private router: Router, private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject = new Subject(0, '');
    if (this.route.snapshot) {
      const id = +this.route.snapshot.params['id'];
      if (id > 0) {
        this.subjectService.getSubjectById(id).subscribe((data: Subject) => this.subject = data);

      }
    }
  }

  onCancelClick() {
    this.router.navigate(['/subjects']);
  }

  onSaveClick() {
    if (this.isEditMode()) {
      this.subjectService.editSubject(this.subject);
    } else {
      this.subjectService.addSubject(this.subject);
    }
    this.router.navigate(['/subjects']);
  }

  isEditMode() {
    return this.subject.id !== 0;
  }
}
