import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recruitpro2Component } from './recruitpro2.component';

describe('Recruitpro2Component', () => {
  let component: Recruitpro2Component;
  let fixture: ComponentFixture<Recruitpro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recruitpro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recruitpro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
