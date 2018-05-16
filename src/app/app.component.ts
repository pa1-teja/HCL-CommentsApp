import { Component, ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory
  } from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import { Observable, Subscription } from 'rxjs/Rx';
  import { SpecificCommentReplyComponent } from './specific-comment-reply/specific-comment-reply.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor() {}
  title = 'app';

 ticks = 0;
  sub: Subscription;

 ngOnInit() {
        this.startTimer();
    }


   allMainComments: string[] = [];
   allUsrNames: string[] = [];
   noOfLikes: number = 0;
   noOfDislikes: number = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;
  
  
  cmtInput(newComment: string, usrName: string){
    if ((newComment !== "" && newComment !== undefined) && (usrName !== "" && usrName !== undefined)) {
      // code...
      this.allMainComments.push(newComment);  
      this.allUsrNames.push(usrName);
    }
    
    console.log(this.allMainComments);
  }

  noOfDislikesMethod(noOfLikes: number, position: number){
    this.noOfDislikes++;
  }

  noOfLikesMenthod(noOfLikes: number, position: number){

    this.noOfLikes++;
  }

  private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;
                
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }

}

  