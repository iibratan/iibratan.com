import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-home-tab',
  templateUrl: './sidebar-home-tab.component.html',
  styleUrls: ['./sidebar-home-tab.component.css']
})
export class SidebarHomeTabComponent implements OnInit {

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
  }

  changeTab(tab) {
    this._sidebarService.changeTab(tab);
  }
}
