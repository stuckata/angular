import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { SchoolClassesComponent } from './school-classes/school-classes.component';
import { SchoolClassComponent } from './school-classes/school-class/school-class.component';
import { StudentComponent } from './students/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subject/new', component: SubjectComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teacher/new', component: TeacherComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'classes', component: SchoolClassesComponent },
  { path: 'class/new', component: SchoolClassComponent },
  { path: 'class/:classId', component: SchoolClassComponent },
  { path: 'class/:classId/:subjectId', component: SchoolClassComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
