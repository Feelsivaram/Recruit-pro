import { TestBed } from '@angular/core/testing';

import { SService } from './s.service';

describe('SService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SService = TestBed.get(SService);
    expect(service).toBeTruthy();
  });
});
