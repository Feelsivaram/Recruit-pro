import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedatabaseComponent } from './resumedatabase.component';

describe('ResumedatabaseComponent', () => {
  let component: ResumedatabaseComponent;
  let fixture: ComponentFixture<ResumedatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
