import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCategoryCardComponent } from './small-category-card.component';

describe('SmallCategoryCardComponent', () => {
  let component: SmallCategoryCardComponent;
  let fixture: ComponentFixture<SmallCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
