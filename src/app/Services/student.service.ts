import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Base API URL from Backend
  private baseApiUrl = "http://localhost:5295/api";

  // Inject HttpClient for making HTTP requests
  private httpClient = inject(HttpClient);

  // Method to fetch student data
  getStudent(): Observable<any> {
    return this.httpClient.get<any>(this.baseApiUrl + '/Students');
  }
}
