import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {FindStudentComponent} from './find-student/find-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'find-student/:id', component: FindStudentComponent},
  { path: 'remove-student/:id', component: DeleteStudentComponent},
  { path: 'student-update', component: StudentUpdateComponent },
  { path: 'students', component: StudentsComponent },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
