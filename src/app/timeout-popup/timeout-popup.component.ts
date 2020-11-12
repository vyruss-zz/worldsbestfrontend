import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-timeout-popup',
  templateUrl: './timeout-popup.component.html',
  styleUrls: ['./timeout-popup.component.css']
})
export class TimeoutPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TimeoutPopupComponent>, private bnIdle: BnNgIdleService, private router: Router) { }

  secondsLeft: number = 15;

  ngOnInit(): void {
    this.bnIdle.startWatching(15).subscribe((isTimedOut: boolean) => {
      // this.timeOut=true;
      if(isTimedOut) {
      this.bnIdle.stopTimer();
      this.dialogRef.close();
      
      this.router.navigate(['/login'])
      // console.log('EXPIRED!');
      }
    }
  );
  }


  remainHere() {
    this.secondsLeft = 15;
    this.bnIdle.stopTimer();
    this.dialogRef.close();
  }

}
