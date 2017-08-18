import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCardsComponent } from './product-detail-cards.component';

describe('ProductDetailCardsComponent', () => {
  let component: ProductDetailCardsComponent;
  let fixture: ComponentFixture<ProductDetailCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
