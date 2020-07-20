import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  student: Student;
  id: number;
  constructor(private studentService: StudentService) { }
  getStudents() {
   this.studentService.getStudents().subscribe((studs: Student[]) => {
    this.students = studs;
  });
  }
  getStudent() {
    this.studentService.id = this.id;
    this.studentService.getStudent()
    .subscribe((stud: Student) => {
      this.student = stud;
    });
   }
  ngOnInit() {
    this.getStudents();
    this.getStudent();
  }
}
