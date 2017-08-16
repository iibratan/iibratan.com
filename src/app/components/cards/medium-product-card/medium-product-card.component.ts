import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-product-card',
  templateUrl: './medium-product-card.component.html',
  styleUrls: ['./medium-product-card.component.css']
})
export class MediumProductCardComponent implements OnInit {
  static cardCount = 0;
  switchSides = false;

  constructor() {
    MediumProductCardComponent.cardCount ++;

    if (MediumProductCardComponent.cardCount % 4 === 3 || MediumProductCardComponent.cardCount % 4 === 0) {
      this.switchSides = true;
    }else {
      this.switchSides = false;
    }
    console.log(this.switchSides);
  }

  ngOnInit() {
  }

}
