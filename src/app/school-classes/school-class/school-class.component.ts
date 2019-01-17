import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SchoolClass } from '../school-class.model';
import { SchoolClassService } from 'src/app/services/school-class.service';
import { Student } from 'src/app/students/student.model';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

  @Input() schoolClass: SchoolClass

  constructor(private route: ActivatedRoute, private schoolClassService: SchoolClassService, private router: Router) { }

  ngOnInit() {
    this.schoolClass = new SchoolClass(0, '', [], []);
    if (this.route.snapshot) {
      const id = +this.route.snapshot.params['id'];
      if (id > 0) {
        let tmp = this.schoolClassService.getClassById(id);
        if (tmp) {
          this.schoolClass = tmp;
        }
      }
    }
  }

  onStudentNameClick(student: Student) {
    this.router.navigate(['/student', student.id]);
  }
}
