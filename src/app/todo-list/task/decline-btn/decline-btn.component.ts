import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decline-btn',
  templateUrl: './decline-btn.component.html',
  styleUrls: ['./decline-btn.component.css']
})
export class DeclineBtnComponent implements OnInit {
  isDeclined: boolean;
  @Output() declined = new EventEmitter<boolean>();
  constructor() {
    this.isDeclined = false;
  }

  decline() {
    this.isDeclined = true;
    console.log(this.isDeclined);
    this.declined.emit(this.isDeclined);
  }
  ngOnInit() {
  }

}
