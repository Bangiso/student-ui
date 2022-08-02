import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  id: any;

  constructor( private studentService: StudentService, private route: ActivatedRoute){ }

  deletetudent() {
    this.route.params.subscribe( 
      params =>{
      this.studentService.deleteStudent(params['id'])
      .subscribe((id: any) => {
          this.id = id;
    })});
   }

  ngOnInit(): void {
    this.deletetudent();
  }

}
