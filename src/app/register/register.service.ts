import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../models/RegisteredUser';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>("http://3.15.201.112:8085/backend/bestever/registerUser",user);
  }

  createRegisteredUser(registeredUser: RegisteredUser): Observable<RegisteredUser> {
    return this.httpClient.post<RegisteredUser>("http://3.15.201.112:8085/backend/bestever/createRegisteredUser",registeredUser);
  }

}
