import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
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
    this.user = {
      userid: 0,
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
      dateRegistered: new Date(),
      myReg: null
    }
    this.user.username=this.loginForm.controls['username'].value;
    this.user.password=this.loginForm.controls['password'].value;
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(
      data => {this.regUser = data
        console.log(data);
        if(data.favoriteFood == 'Invalid Password') {
          this.invalidError='Invalid Username or Password'
        } else {
          this.invalidError='';
          this.currentUser.currentUser=this.regUser;
          this.router.navigate(['/view']);
        }
      });
  }

  register() {
    this.router.navigate(['/register']);
  }

  constructor(private loginService: LoginService, private router: Router, private currentUser: CurrentUserService) { }

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
      dateRegistered: new Date,
      myReg: null
    }
  }

}
