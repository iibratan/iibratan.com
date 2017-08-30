import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-product-card',
  templateUrl: './medium-product-card.component.html',
  styleUrls: ['./medium-product-card.component.css']
})
export class MediumProductCardComponent implements OnInit {
  private static cardCount = 0;
  private static _switchSides = false;
  protected switchSides: boolean;
  private modNumber: number;
  viewport: string;

  constructor() {
    MediumProductCardComponent.cardCount ++;

    const mq = window.matchMedia('(max-width: 480px)');

    if (mq.matches) {
      this.modNumber = 1;
    }else {
      this.modNumber = 3;
    }

    if (MediumProductCardComponent.cardCount % this.modNumber === 0) {
      MediumProductCardComponent._switchSides = !MediumProductCardComponent._switchSides;
    }

    this.switchSides = MediumProductCardComponent._switchSides;
  }

  ngOnInit() {
  }

}
