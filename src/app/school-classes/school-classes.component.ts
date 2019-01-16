import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SchoolClass } from './school-class.model';
import { SchoolClassService } from '../services/school-class.service';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {

  classes: SchoolClass[] = [];

  constructor(private schoolClassService: SchoolClassService, private router: Router) { }

  ngOnInit() {
    this.classes = this.schoolClassService.getClasses();
    this.schoolClassService.classesChanged.subscribe((classes: SchoolClass[]) => this.classes = classes);
  }

  onEditClick(schoolClass: SchoolClass) {
    this.router.navigate(['/class', schoolClass.id]);
  }
}
