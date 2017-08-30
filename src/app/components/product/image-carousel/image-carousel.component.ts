import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  animations: [
    trigger('imgAnimation', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(50%)',
      })),
      state('right', style({
        opacity: 0,
        transform: 'translateX(-50%)',
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('right <=> active', [
          animate('.250s ease')
        ]
      ),
      transition('left <=> active', [
          animate('.250s ease')
        ]
      ),
      transition('left <=> right', [
          animate('0s')
        ]
      )
    ]),
  ]
})
export class ImageCarouselComponent implements OnInit {
  @Input() imgUrls;
  imgContainerState = 'active';
  public currentIndex;
  public currentImage;

  constructor() {
    this.currentIndex = 0;
  }

  ngOnInit() {
    this.currentImage = this.imgUrls[this.currentIndex];
  }

  setImage() {
    setTimeout(() => {
      this.currentImage = this.imgUrls[this.currentIndex];
      if (this.imgContainerState === 'left') {
        this.imgContainerState = 'right';
      } else if (this.imgContainerState = 'right') {
        this.imgContainerState = 'left';
      }
    }, 250);
    setTimeout( () => {
      this.imgContainerState = 'active';
    }, 250);
  }

  selectImage(imageIndex: number) {
    if (this.currentIndex !== imageIndex) {
      if (this.currentIndex < imageIndex) {
        this.imgContainerState = 'right';
      }else {
        this.imgContainerState = 'left';
      }
      this.currentIndex = imageIndex;
      this.setImage();
    }
  }

  rightClick() {
    if (this.currentIndex !== this.imgUrls.length - 1) {
      this.currentIndex ++;
    }else {
      this.currentIndex = 0;
    }
    this.imgContainerState = 'right';
    this.setImage();
  }

  leftClick() {
    if (this.currentIndex !== 0) {
      this.currentIndex --;
    }else {
      this.currentIndex = this.imgUrls.length - 1;
    }
    this.imgContainerState = 'left';
    this.setImage();
  }

}
