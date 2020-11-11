import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../models/RegisteredUser';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }
  url: string = 'http://3.15.201.112:8085/backend/bestever/';

  users(): Observable<any[]>{
    console.log("Getting Users");
    return this.http.get<any[]>(this.url+'users');
  }

  getRegistered(user: User): Observable<any>{
    console.log("Getting Registered User");
    return this.http.post<any>(this.url+'getRegistered', user);
  }

  createRegisteredUser(user: RegisteredUser): Observable<any>{
    console.log("Creating Registered User");
    return this.http.post<any>(this.url+'createRegisteredUser', user);
  }

  updateRegisteredUser(user: RegisteredUser): Observable<any>{
    console.log("Updating Registered User");
    return this.http.post<any>(this.url+'updateRegisteredUser', user);
  }
}