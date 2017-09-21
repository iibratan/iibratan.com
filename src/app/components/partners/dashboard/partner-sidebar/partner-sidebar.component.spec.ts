import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSidebarComponent } from './partner-sidebar.component';

describe('PartnerSidebarComponent', () => {
  let component: PartnerSidebarComponent;
  let fixture: ComponentFixture<PartnerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
