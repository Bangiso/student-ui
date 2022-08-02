import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {

  constructor( private studentService: StudentService, private route: ActivatedRoute){ }
  student: Student;
  id: any;

  getStudent() {
    this.route.params.subscribe( 
      params =>{
      this.studentService.getStudent(params['id'])
      .subscribe((stud: Student) => {
          this.student = stud;
    })});
   }

  ngOnInit(): void {
    this.getStudent();
  }

}
