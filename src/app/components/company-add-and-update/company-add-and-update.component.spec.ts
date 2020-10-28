import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddAndUpdateComponent } from './company-add-and-update.component';

describe('CompanyAddAndUpdateComponent', () => {
  let component: CompanyAddAndUpdateComponent;
  let fixture: ComponentFixture<CompanyAddAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
