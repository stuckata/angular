import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subject/new', component: SubjectComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teacher/new', component: TeacherComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
