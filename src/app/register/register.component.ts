import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredUser } from '../models/RegisteredUser'
import { User } from '../models/User';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  newUser: User;
  newRegisteredUser: RegisteredUser;

  username: string;
  password: string;
  favorite_food: string;
  pet: string;
  favorite_color: string;
  zodiac_sign: string;
  favorite_palindrome: string;


  form = new FormGroup({
    username: new FormControl('uSeRnAmE', [Validators.required]),
    password: new FormControl('PaSsWoRd', [Validators.required]),
    favorite_food: new FormControl('_________', [Validators.required]),
    pet: new FormControl('-------', [Validators.required]),
    favorite_color: new FormControl('==========', [Validators.required]),
    zodiac_sign: new FormControl('````````', [Validators.required]),
    favorite_palindrome: new FormControl("'''''''", [Validators.required]),
  });

  submitRegisteredUser() {

    //Create dummy user to send to back end

    this.newUser = {
      userid: 0,
      dateRegistered: new Date,
      username: this.form.controls["username"].value,
      password: this.form.controls["password"].value,
      myReg: null
    }
    console.log(JSON.stringify(this.newUser));

    let persistedUser: User;
    //Send user object to back end to persist
    this.registerService.createUser(this.newUser).subscribe(
      (data) => {
        persistedUser = data;
        //Check if persisted user exists, then send registered user object if one was sent
        console.log("PERSISTED USER: " + JSON.stringify(persistedUser))
        if(persistedUser != undefined) {
          this.newRegisteredUser = {
            registeredid: 0,
            favoriteFood: this.form.controls["favorite_food"].value,
            favoriteColor: this.form.controls["favorite_color"].value,
            favoritePet: this.form.controls["pet"].value,
            zodiacSign: this.form.controls["zodiac_sign"].value,
            favoritePalindrome: this.form.controls["favorite_palindrome"].value,
            myUser: persistedUser
          }
        }
        else {
          console.log("New user failed to persist.");
        }
        this.registerService.createRegisteredUser(this.newRegisteredUser).subscribe(
          (data) => {console.log("NEW REGISTERED USER: " + data);
          this.router.navigate(['/login'])},
          (error) => console.log(error)
        )
      },
      (error) => {

      }
    );
    
    

    
  }//end submitRegisteredUser()

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
