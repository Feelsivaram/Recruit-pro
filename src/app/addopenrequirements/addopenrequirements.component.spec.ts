import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddopenrequirementsComponent } from './addopenrequirements.component';

describe('AddopenrequirementsComponent', () => {
  let component: AddopenrequirementsComponent;
  let fixture: ComponentFixture<AddopenrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddopenrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddopenrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
