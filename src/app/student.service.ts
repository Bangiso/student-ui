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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
};
  url = 'http://localhost:8088/students';

  addStudent(student: Student) {
    if(Object.keys(student).length!=0){
      return this.http.post<Student>(this.url, JSON.stringify(student), this.httpOptions);
    }
    return null;
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id: any): Observable<Student> {
    if(!id.isEmpty){
      return this.http.get<Student>(this.url + `/${id}`);
    }
  }
  deleteStudent(id: any){
    if(!id.isEmpty){
      return this.http.delete<Student>(this.url + `/${id}`, this.httpOptions);
    }
    return null;
  }
}
