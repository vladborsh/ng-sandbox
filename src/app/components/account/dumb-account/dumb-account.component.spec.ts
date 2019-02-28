import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbAccountComponent } from './dumb-account.component';

describe('DumbAccountComponent', () => {
  let component: DumbAccountComponent;
  let fixture: ComponentFixture<DumbAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
