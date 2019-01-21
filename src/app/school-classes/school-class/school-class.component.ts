import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SchoolClass } from '../school-class.model';
import { SchoolClassService } from 'src/app/services/school-class.service';
import { Student } from 'src/app/students/student.model';
import { Subject } from 'src/app/subjects/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

  @Input() schoolClass: SchoolClass;
  @Input() subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private schoolClassService: SchoolClassService,
    private router: Router,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.schoolClass = new SchoolClass(0, '', []);
    this.subject = new Subject(0, '');
    if (this.route.snapshot) {
      const classId: number = parseInt(this.route.snapshot.params['classId']);
      if (classId > 0) {
        this.schoolClassService.getClassById(classId).subscribe((data: SchoolClass) => { this.schoolClass = data });
      }

      const subjectId = +this.route.snapshot.params['subjectId'];
      if (subjectId > 0) {
        let tmpSubject = this.subjectService.getSubjectById(subjectId);
        if (tmpSubject) {
          this.subject = tmpSubject;
        }
      }
    }
  }

  onStudentNameClick(student: Student) {
    this.router.navigate(['/student', student.id]);
  }
}
