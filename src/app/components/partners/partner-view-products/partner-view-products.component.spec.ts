import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerViewProductsComponent } from './partner-view-products.component';

describe('PartnerViewProductsComponent', () => {
  let component: PartnerViewProductsComponent;
  let fixture: ComponentFixture<PartnerViewProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerViewProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
