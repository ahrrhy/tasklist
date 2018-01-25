import { Component, OnInit, Input } from '@angular/core';

import { Task, State } from './taskinterface';
import { FavoriteBtnComponent } from './favorite-btn/favorite-btn.component';
import { DeclineBtnComponent } from './decline-btn/decline-btn.component';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() favorite: boolean;
  decline: false;
  constructor() {
  }
  favoriteMarked(favorite) {
    this.favorite = favorite;
    console.log(this.favorite);
  }
  declined(decline) {
    this.decline = decline;
    console.log(this.decline);
  }
  ngOnInit() {
  }

}
