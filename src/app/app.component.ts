import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { TimeoutPopupComponent } from './timeout-popup/timeout-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'worldsbestfrontend';
  constructor(private bnIdle: BnNgIdleService, private router: Router, private dialog: MatDialog) {

  }

  timeOutSeconds: number = 15;

  dialogShowing: boolean = false;

  timeOut: boolean = false;

  ngOnInit(): void {

    this.bnIdle.startWatching(this.timeOutSeconds).subscribe((isTimedOut: boolean) => {
      if(!this.dialogShowing) {
        this.dialogShowing=true;
        this.timeOut=true;
        this.bnIdle.stopTimer();

        this.warnTimeout();
      } 
      
        // console.log('EXPIRED!');

      }
    );
  } 
  

  warnTimeout(): void {

    let dialogRef = this.dialog.open(TimeoutPopupComponent, {
      
      panelClass: 'mat-dialog-container',
      
      
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('Stay or leave?');
      this.dialog.closeAll();      
      this.bnIdle.resetTimer();
      this.dialogShowing=false;
    })


}
}
