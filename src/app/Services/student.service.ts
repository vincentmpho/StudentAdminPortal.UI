import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/Api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Base API URL from Backend
  private baseApiUrl = "http://localhost:5295/api";

  // Inject HttpClient for making HTTP requests
  private httpClient = inject(HttpClient);

  // Method to fetch student data
  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/Students');
  }

  //Mehod to fetch student details 

  getStudent(studentId: string): Observable<Student> {
    
     //return this.httpClient.get<Student>(this.baseApiUrl + '/Students' +studentId );
    return this.httpClient.get<Student>(`${this.baseApiUrl}/Students/${studentId}`);
    
    
}

}
