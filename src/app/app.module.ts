import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { MarksComponent } from './marks/marks.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolClassesComponent } from './school-classes/school-classes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MarkComponent } from './marks/mark/mark.component';
import { SchoolClassComponent } from './school-classes/school-class/school-class.component';
import { StudentComponent } from './students/student/student.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { MarkListComponent } from './marks/mark-list/mark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    MarksComponent,
    SubjectsComponent,
    TeachersComponent,
    SchoolClassesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MarkComponent,
    SchoolClassComponent,
    StudentComponent,
    SubjectComponent,
    TeacherComponent,
    MarkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
