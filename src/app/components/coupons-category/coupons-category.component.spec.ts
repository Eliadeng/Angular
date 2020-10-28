import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsCategoryComponent } from './coupons-category.component';

describe('CouponsCategoryComponent', () => {
  let component: CouponsCategoryComponent;
  let fixture: ComponentFixture<CouponsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
