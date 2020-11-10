import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  myFood: String = 'Goldfish';
  myPet: String = 'Ghost Pepper';
  myColor: String ='Clear';
  myZodiac: String = 'Noodles';
  myPalindrome: String = 'aAa';

  ngOnInit(): void {
  }

}
