import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCartTabComponent } from './sidebar-cart-tab.component';

describe('SidebarCartTabComponent', () => {
  let component: SidebarCartTabComponent;
  let fixture: ComponentFixture<SidebarCartTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCartTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
