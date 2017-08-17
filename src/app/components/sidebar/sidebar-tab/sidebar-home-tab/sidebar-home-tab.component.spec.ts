import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHomeTabComponent } from './sidebar-home-tab.component';

describe('SidebarHomeTabComponent', () => {
  let component: SidebarHomeTabComponent;
  let fixture: ComponentFixture<SidebarHomeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHomeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
