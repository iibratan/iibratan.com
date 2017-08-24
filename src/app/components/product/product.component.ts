import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('cardToggle', [
      state('inactive', style({
        height: 0,
        opacity: 0,
        display: 'none'
      })),
      state('active', style({
        height: '*',
        opacity: 1,
        display: 'block'
      })),
      transition('inactive <=> active', [
          animate('.25s ease-out')
        ]
      )
    ])
  ]
})

export class ProductComponent implements OnInit {
  imgUrls = [
    '../../../../assets/images/placeholders/Graphics%20Cards.jpg',
    '../../../../assets/images/placeholders/Processors.jpg',
    '../../../../assets/images/placeholders/ssd_placeholder.jpg'
  ];

  protected cardStates = {
    overview: 'inactive',
    specs: 'inactive',
    review: 'inactive'
  };

  constructor() { }

  ngOnInit() {
    this.cardStates.specs = 'active';
  }

  openCard(cardName: string) {
    for (const card in this.cardStates) {
      this.cardStates[card] = 'inactive';
    }
    this.cardStates[cardName] = 'active';
  }
}
