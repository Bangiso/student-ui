import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { isEmpty, Observable } from 'rxjs';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  studentUpdate: Student;
  id: number;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
  };
  url = 'http://localhost:8088/students';

  addStudent() {
    if(Object.keys(this.studentUpdate).length!=0){
      this.http.post<Student>(this.url, JSON.stringify(this.studentUpdate), this.httpOptions).
      subscribe();
    }
    return null;
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/all');
  }
  getStudent(): Observable<Student> {
    return this.http.get<Student>(this.url + `/${this.id}`);
}
}
