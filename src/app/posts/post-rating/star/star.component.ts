
import { Component, HostBinding, EventEmitter, Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() status : Boolean;
  @Output() switched = new EventEmitter<Boolean>();

  onSwitch(){
    this.status = !this.status;
    this.switched.emit(this.status);
  }


  @HostBinding('style.backgroundImage')
  getBackgroundImageUrl() {
    if (this.status) {
      return '../../../../assets/start_on.png';
    } else {
      return '../../../../assets/start_off.png';
    }


  }
}
