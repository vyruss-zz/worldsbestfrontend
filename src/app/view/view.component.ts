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
    service.users().subscribe(
      data => { console.log(data); }
    );
  }

  myFood: String = 'Goldfish';
  myPet: String = 'Ghost Pepper';
  myColor: String ='Clear';
  myZodiac: String = 'Noodles';
  myPalindrome: String = 'aAa';

  isEditing: boolean = false;

  changeEditMode() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {
  }

}
