import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.student = new Student(0, 0, '');
    if (this.route.snapshot) {
      const id = +this.route.snapshot.params['id'];
      if (id > 0) {
        let tmp: Student;
        this.studentService.getStudentById(id).subscribe((data: {}) => {
          console.log(data);
        });
        if (tmp) {
          this.student = tmp;
        }
      }
    }
  }

}
