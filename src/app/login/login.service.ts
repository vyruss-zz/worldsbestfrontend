import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../models/RegisteredUser';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<RegisteredUser> {
    return this.http.post<RegisteredUser>("http://3.15.201.112:8085/backend/bestever/getRegistered", user);
  }
}
