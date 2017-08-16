import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumProductCardComponent } from './medium-product-card.component';

describe('MediumProductCardComponent', () => {
  let component: MediumProductCardComponent;
  let fixture: ComponentFixture<MediumProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
