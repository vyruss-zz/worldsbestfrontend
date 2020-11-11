import { Injectable } from '@angular/core';
import { RegisteredUser } from './models/RegisteredUser';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUser: RegisteredUser;

  constructor() { }
}
