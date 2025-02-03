import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gender } from '../Models/Api-models/gender.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

   // Base API URL from Backend
   private baseApiUrl = "http://localhost:5295/api";

    // Inject HttpClient for making HTTP requests
    private httpClient = inject(HttpClient);

    getGenderList(): Observable<Gender[]>  {
      return this.httpClient.get<Gender[]>(this.baseApiUrl + '/Gender'); 
   }
   
}
