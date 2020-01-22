import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmoenrequirementsComponent } from './bdmoenrequirements.component';

describe('BdmoenrequirementsComponent', () => {
  let component: BdmoenrequirementsComponent;
  let fixture: ComponentFixture<BdmoenrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmoenrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmoenrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
