import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissiontrackerComponent } from './submissiontracker.component';

describe('SubmissiontrackerComponent', () => {
  let component: SubmissiontrackerComponent;
  let fixture: ComponentFixture<SubmissiontrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissiontrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissiontrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
