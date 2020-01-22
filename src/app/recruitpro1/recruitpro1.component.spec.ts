import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recruitpro1Component } from './recruitpro1.component';

describe('Recruitpro1Component', () => {
  let component: Recruitpro1Component;
  let fixture: ComponentFixture<Recruitpro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recruitpro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recruitpro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
