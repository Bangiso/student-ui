import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

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
  url = 'http://localhost:8088/student';
  addStudent() {
    console.log(this.studentUpdate);
    return this.http.post<Student>(this.url, JSON.stringify(this.studentUpdate), this.httpOptions).
    subscribe();
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + 's/all');
  }
  getStudent(): Observable<Student> {
    return this.http.get<Student>(this.url + `s/${this.id}`);
}
}
