import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private studentService: StudentService) { }
  getStudents() {
   this.students = this.studentService.getStudents();
  }
  ngOnInit() {
    this.getStudents();
  }

}
