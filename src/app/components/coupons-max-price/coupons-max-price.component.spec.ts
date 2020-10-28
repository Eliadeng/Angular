import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsMaxPriceComponent } from './coupons-max-price.component';

describe('CouponsMaxPriceComponent', () => {
  let component: CouponsMaxPriceComponent;
  let fixture: ComponentFixture<CouponsMaxPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsMaxPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsMaxPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
