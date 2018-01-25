import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.css']
})
export class FavoriteBtnComponent implements OnInit {
  //
  favorite: boolean;
  //
  @Output() favoriteMarked = new EventEmitter<boolean>();
  //
  constructor() {
    this.favorite = false;
  }
  //
  markFavorite() {
      if (this.favorite === true) {
        this.favorite = false;
      } else {
        this.favorite = true;
      }
    this.favoriteMarked.emit(this.favorite);
  }
  //
  ngOnInit() {
  }

}
