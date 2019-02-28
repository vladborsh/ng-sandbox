import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCustomerComponent } from './smart-customer.component';

describe('SmartCustomerComponent', () => {
  let component: SmartCustomerComponent;
  let fixture: ComponentFixture<SmartCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
