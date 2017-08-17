import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSettingsTabComponent } from './sidebar-settings-tab.component';

describe('SidebarSettingsTabComponent', () => {
  let component: SidebarSettingsTabComponent;
  let fixture: ComponentFixture<SidebarSettingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSettingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSettingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
