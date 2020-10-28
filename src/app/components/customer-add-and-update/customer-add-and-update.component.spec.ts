import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddAndUpdateComponent } from './customer-add-and-update.component';

describe('CustomerAddAndUpdateComponent', () => {
  let component: CustomerAddAndUpdateComponent;
  let fixture: ComponentFixture<CustomerAddAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
