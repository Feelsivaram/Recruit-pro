import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrdopenrequirementsComponent } from './brdopenrequirements.component';

describe('BrdopenrequirementsComponent', () => {
  let component: BrdopenrequirementsComponent;
  let fixture: ComponentFixture<BrdopenrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrdopenrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrdopenrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
