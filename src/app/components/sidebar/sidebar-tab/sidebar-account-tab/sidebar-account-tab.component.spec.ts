import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccountTabComponent } from './sidebar-account-tab.component';

describe('SidebarAccountTabComponent', () => {
  let component: SidebarAccountTabComponent;
  let fixture: ComponentFixture<SidebarAccountTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAccountTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAccountTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
