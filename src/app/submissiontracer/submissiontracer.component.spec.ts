import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissiontracerComponent } from './submissiontracer.component';

describe('SubmissiontracerComponent', () => {
  let component: SubmissiontracerComponent;
  let fixture: ComponentFixture<SubmissiontracerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissiontracerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissiontracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
