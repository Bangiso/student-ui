import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  studentUpdate: Student
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
  };
  url = 'http://localhost:8088/student';
  addStudent() {
    return this.http.post<Student>(this.url, JSON.stringify(this.studentUpdate), this.httpOptions).
    subscribe();
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + 's/all');
  }
}
