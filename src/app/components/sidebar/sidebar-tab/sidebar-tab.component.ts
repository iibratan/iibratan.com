import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-tab',
  templateUrl: './sidebar-tab.component.html',
  styleUrls: ['./sidebar-tab.component.css']
})
export class SidebarTabComponent implements OnInit {
  @Input() cardName;

  constructor() { }

  ngOnInit() {
  }

}
