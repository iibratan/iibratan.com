import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCatalogueTabComponent } from './sidebar-catalogue-tab.component';

describe('SidebarCatalogueTabComponent', () => {
  let component: SidebarCatalogueTabComponent;
  let fixture: ComponentFixture<SidebarCatalogueTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCatalogueTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCatalogueTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
