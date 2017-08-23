import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  FirstNameOnServer= 'Jimmy';
  LastNameOnServer = 'Jommy';


  showmain = true;
  show1 = false;
  show2 = false;
  show3 = false;

  constructor() { }

  ngOnInit() {
  }

  switchToMain() {
    this.showmain = true;
    this.show2 = false;
    this.show3 = false;
    this.show1 = false;
  }

  switchTo1() {
    this.showmain = false;
    this.show2 = false;
    this.show3 = false;
    this.show1 = true;
  }

  switchTo2() {
    this.showmain = false;
    this.show2 = true;
    this.show3 = false;
    this.show1 = false;
  }

  switchTo3() {
    this.showmain = false;
    this.show2 = false;
    this.show3 = true;
    this.show1 = false;
  }
}
