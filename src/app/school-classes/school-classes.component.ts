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
    this.schoolClassService.getClasses().subscribe((data: SchoolClass[]) => { this.classes = data });
    this.schoolClassService.classesChanged.subscribe((classes: SchoolClass[]) => this.classes = classes);
  }

  onClassDetailsClick(schoolClass: SchoolClass) {
    this.router.navigate(['/class', schoolClass.id]);
  }
}
