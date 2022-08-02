import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import { isDefined, noUndefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  
  name: any;
  id: any;
  gpa: any;
  response: number;

  constructor(private studentService: StudentService) { }

  addStudent() {
    this.response = null;
      if(!this.gpa.isEmpty && !this.id.isEmpty && !this.name.isEmpty){
        var studentUpdate: Student = {id: this.id, name : this.name, gpa: this.gpa };
        this.studentService.addStudent(studentUpdate).subscribe((id: any) => {
          console.log(`Id value is: ${id}`)
          if(!id.isEmpty&& id!==null){
            this.response = id;
          }
    })
    }
    return this.response;
  }

  ngOnInit() {
    this.addStudent();
  }

}
