import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardErrorsComponent } from './card-errors.component';

describe('CardErrorsComponent', () => {
  let component: CardErrorsComponent;
  let fixture: ComponentFixture<CardErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
