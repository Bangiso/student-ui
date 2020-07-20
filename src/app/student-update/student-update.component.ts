import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  constructor(private studentService: StudentService) { }
  name: string
  id: number
  gpa: number

  addStudent() {
    this.studentService.studentUpdate = {id: this.id, name : this.name, gpa: this.gpa };
    return this.studentService.addStudent();
  }
  ngOnInit() {
    this.addStudent();
  }

}
