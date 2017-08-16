import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private products;

  constructor( private __firebase: FirebaseService ) { }

  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAwZO9CRKoi1gMuQaugbPxSc1H4AiDvuD8',
        authDomain: 'iibratan-aade0.firebaseapp.com',
        databaseURL: 'https://iibratan-aade0.firebaseio.com',
        projectId: 'iibratan-aade0',
        storageBucket: 'iibratan-aade0.appspot.com',
        messagingSenderId: '817576896569'
      });
  }
  ngOnDestroy() {}
}
