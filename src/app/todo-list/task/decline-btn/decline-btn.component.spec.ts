import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineBtnComponent } from './decline-btn.component';

describe('DeclineBtnComponent', () => {
  let component: DeclineBtnComponent;
  let fixture: ComponentFixture<DeclineBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclineBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
