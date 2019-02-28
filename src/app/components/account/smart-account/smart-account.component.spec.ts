import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAccountComponent } from './smart-account.component';

describe('SmartAccountComponent', () => {
  let component: SmartAccountComponent;
  let fixture: ComponentFixture<SmartAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
