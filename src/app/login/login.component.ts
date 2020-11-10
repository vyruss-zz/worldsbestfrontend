import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteredUser } from '../models/RegisteredUser';
import { User } from '../models/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidError = '';

  regUser: RegisteredUser;
  user: User;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submitForm() {
    console.log('hovering around');
    this.loginService.loginUser(this.user).subscribe(
      data => {this.regUser = data
        console.log(data);
        if(data.favoriteFood == 'Invalid Password') {
          this.invalidError='Invalid Username or Password'
        }
      });
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.regUser = {
      registeredid: 0,
      favoriteColor: "",
      favoriteFood: "",
      favoritePalindrome: "",
      favoritePet: "",
      zodiacSign: "",
      myUser: null

    }

    this.user = {
      userid: 0,
      username: "",
      password: "",
      dateRegistered: new Date
    }
  }

}
