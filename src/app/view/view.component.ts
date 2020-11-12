import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from '../models/RegisteredUser';
import { User } from '../models/User';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service: ViewService) { 
    this.getRegisteredUser(1);
  }

  rUser: RegisteredUser;

  myFood: string = 'Goldfish';
  myPet: string = 'Ghost Pepper';
  myColor: string ='Clear';
  myZodiac: string = 'Noodles';
  myPalindrome: string = 'aAa';

  isEditing: boolean = false;

  changeEditMode() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {}

  getRegisteredUser(index: number){
    this.service.users().subscribe(
      data => { 
        this.rUser = data[index].reg;

        this.myFood = this.rUser.favoriteFood;
        this.myPet = this.rUser.favoritePet;
        this.myColor = this.rUser.favoriteColor;
        this.myZodiac = this.rUser.zodiacSign;
        this.myPalindrome = this.rUser.favoritePalindrome;

        this.rUser.myUser = data[index];

        data[index].reg = null;
      }
    );
  }

  updateRegisteredUser(){
    this.rUser.favoriteFood = this.myFood;
    this.rUser.favoritePet = this.myPet;
    this.rUser.favoriteColor = this.myColor;
    this.rUser.zodiacSign = this.myZodiac;
    this.rUser.favoritePalindrome = this.myPalindrome;
    
    this.service.updateRegisteredUser(this.rUser).subscribe();
  }
}
