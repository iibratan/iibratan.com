import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private showSideBar = true;

  constructor( private router: Router, private __sidebarService: SidebarService) {
    this.router.events.subscribe(() => {
      (this.router.url === '/') ? this.showSideBar = false : this.showSideBar = true;
    });
  }

  ngOnInit() {
  }

  openSidebar(tab) {
    this.__sidebarService.changeTab(tab);
    this.__sidebarService.toggleSidebar();
  }

}
