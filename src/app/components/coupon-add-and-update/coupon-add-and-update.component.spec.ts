import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAddAndUpdateComponent } from './coupon-add-and-update.component';

describe('CouponAddAndUpdateComponent', () => {
  let component: CouponAddAndUpdateComponent;
  let fixture: ComponentFixture<CouponAddAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponAddAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAddAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
