import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recruitpro3Component } from './recruitpro3.component';

describe('Recruitpro3Component', () => {
  let component: Recruitpro3Component;
  let fixture: ComponentFixture<Recruitpro3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recruitpro3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recruitpro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
