import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentsComponent} from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentUpdateComponent,
    FindStudentComponent,
    NotFoundComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
