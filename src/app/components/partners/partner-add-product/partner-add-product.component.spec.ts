import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAddProductComponent } from './partner-add-product.component';

describe('PartnerAddProductComponent', () => {
  let component: PartnerAddProductComponent;
  let fixture: ComponentFixture<PartnerAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
