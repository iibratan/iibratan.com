import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imgUrls = [
    '../../../../assets/images/placeholders/Graphics%20Cards.jpg',
    '../../../../assets/images/placeholders/Processors.jpg',
    '../../../../assets/images/placeholders/ssd_placeholder.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
