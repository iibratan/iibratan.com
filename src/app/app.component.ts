import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  headerActive = true;
  footerActive = true;

  constructor( private __firebase: FirebaseService, private router: Router) {
    this.router.events.subscribe(() => {
      (this.router.url === '/partners') ? this.headerActive = false : this.headerActive = true;
      (this.router.url === '/partners') ? this.footerActive = false : this.footerActive = true;
    });
  }

  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAwZO9CRKoi1gMuQaugbPxSc1H4AiDvuD8',
        authDomain: 'iibratan-aade0.firebaseapp.com',
        databaseURL: 'https://iibratan-aade0.firebaseio.com',
        projectId: 'iibratan-aade0',
        storageBucket: 'iibratan-aade0.appspot.com',
        messagingSenderId: '817576896569'
    });
    // Solves mobile keyboard resizing issue
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', 'height=' + viewHeight + 'px, width=' + viewWidth + 'px, initial-scale=1.0');
  }
  ngOnDestroy() {}
}
