import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrdsubmissiontrackerComponent } from './brdsubmissiontracker.component';

describe('BrdsubmissiontrackerComponent', () => {
  let component: BrdsubmissiontrackerComponent;
  let fixture: ComponentFixture<BrdsubmissiontrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrdsubmissiontrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrdsubmissiontrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
