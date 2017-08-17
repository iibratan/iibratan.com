import { Component, OnDestroy, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidebarService} from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fadeToggle', [
      state('closed', style({
        opacity: 0,
        display: 'none'
      })),
      state('open', style({
        opacity: 1,
        display: 'block'
      })),
      transition('closed <=> open', [
          animate('.25s ease-out')
        ]
      )
    ]),
    trigger('rightInToggle', [
      state('closed', style({
        opacity: 0,
        transform: 'translate(120%) scale(1.2)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'translate(0%) scale(1)',
      })),
      transition('closed <=> open', [
          animate('.25s ease-in-out')
        ]
      )
    ]),
    trigger('cardToggle', [
      state('void', style({
        opacity: 0,
        transform: 'translate(200%)'
      })),
      state('cut', style({
        opacity: 1,
        transform: 'translate(0%)',
      })),
      state('fancy', style({
        opacity: 1,
        transform: 'translate(0%)',
      })),
      state('fadeOut', style({
        opacity: 0,
        transform: '',
      })),
      transition('void => cut', [
          animate('0s' )
        ]
      ),
      transition('cut => void', [
          animate('.5s' )
        ]
      ),
      transition('cut <=> fancy', [
          animate('5s ease-out' )
        ]
      ),
      transition('void <=> fancy', [
          animate('.5s ease-out' )
        ]
      ),
    ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  private sidebarOpen;
  private _subscription;
  protected cardStates;

  constructor( private _sidebarService: SidebarService ) {
    this.sidebarOpen = this._sidebarService.getSidebarState();
    this._subscription = _sidebarService.stateToggled$.subscribe((value) => {
      this.sidebarOpen = value;
    });
    this.cardStates = this._sidebarService.getCardStates();
    this._subscription = _sidebarService.tabChanged$.subscribe((value) => {
      this.cardStates = value;
    });
  }

  ngOnInit() {
    this.changeTab(this._sidebarService.getCardStates());
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  changeTab(tab) {
    this._sidebarService.changeTab(tab);
  }

  closeSidebar() {
    this._sidebarService.toggleSidebar();
  }

}
