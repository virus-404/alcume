import { Component } from '@angular/core';

@Component({
  selector: 'post-rating',
  templateUrl: './post-rating.component.html',
  styleUrls: ['./post-rating.component.css']
})
export class PostRatingComponent{
  starsStatus : boolean[] = [false, false, false, false, false];

  updateStatus(id: number){
    if(id > 0 && id < 4) {
      this.starsStatus[id] = this.starsStatus[id] == this.starsStatus[id + 1];
    } else {
      this.starsStatus[id] = !this.starsStatus[id];
    }
    console.log(this.starsStatus);
    for (let i = 0; i < this.starsStatus.length; i++) {
      if (i < id) {
        this.starsStatus[i] = this.starsStatus[id];
      } else if (i > id ){
        this.starsStatus[i] = false;
      }
    }
    console.log(this.starsStatus);
  }
}
