import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  private sidebarOpen = 'closed';
  private currentTab;
  private stateToggled = new Subject<string>();
  private tabChange = new Subject<{}>();
  protected cardStates = {
    account: 'void',
    cart: 'void',
    category: 'void',
    home: 'void',
  };

  stateToggled$ = this.stateToggled.asObservable();
  tabChanged$ = this.tabChange.asObservable();

  constructor() { }

  getSidebarState() {
    return this.sidebarOpen;
  }

  getCardStates() {
    return this.cardStates;
  }

  changeTab(tabName: string) {
    for (const tabs in this.cardStates) {
      this.cardStates[tabs] = 'void';
    }
    this.tabChange.next(this.cardStates);
    (this.sidebarOpen === 'closed') ? this.cardStates[tabName] = 'cut' : this.cardStates[tabName] = 'fancy';

    this.currentTab = tabName;
  }

  toggleSidebar() {
    this.sidebarOpen = (this.sidebarOpen === 'open') ? 'closed' : 'open';
    this.stateToggled.next(this.sidebarOpen);
  }

}
