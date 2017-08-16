import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  disabled = true;
  searchValue: string;
  constructor() { }

  ngOnInit() {
  }

  searchInputEmpty() {
    console.log('run');
    if (this.searchValue !== '') {
      this.disabled = false;
    }else {
      this.disabled = true;
    }
  }
}
