import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service: ViewService, private currentUser: CurrentUserService) { 
    service.users().subscribe(
      data => { console.log(data); }
    );
  }

  myFood: string = 'Goldfish';
  myPet: string = 'Ghost Pepper';
  myColor: string ='Clear';
  myZodiac: string = 'Noodles';
  myPalindrome: string = 'aAa';

  isEditing: boolean = false;

  changeEditMode() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {
    if(!this.currentUser.currentUser) {
      this.myFood = 'Goldfish';
      this.myPet = 'Ghost Pepper';
      this.myColor ='Clear';
      this.myZodiac = 'Noodles';
      this.myPalindrome = 'aAa';
      } else {
        this.myFood = this.currentUser.currentUser.favoriteFood;
        this.myPet = this.currentUser.currentUser.favoritePet;
        this.myColor = this.currentUser.currentUser.favoriteColor;
        this.myZodiac = this.currentUser.currentUser.zodiacSign;
        this.myPalindrome = this.currentUser.currentUser.favoritePalindrome;
      }
  }
  
  updateRegisteredUser(){
    this.currentUser.currentUser.favoriteFood = this.myFood;
    this.currentUser.currentUser.favoritePet = this.myPet;
    this.currentUser.currentUser.favoriteColor = this.myColor;
    this.currentUser.currentUser.zodiacSign = this.myZodiac;
    this.currentUser.currentUser.favoritePalindrome = this.myPalindrome;
    
    console.log(this.currentUser.currentUser);
    this.service.updateRegisteredUser(this.currentUser.currentUser).subscribe();
  }
}
