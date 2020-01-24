import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenrequirementsComponent } from './openrequirements.component';

describe('OpenrequirementsComponent', () => {
  let component: OpenrequirementsComponent;
  let fixture: ComponentFixture<OpenrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
