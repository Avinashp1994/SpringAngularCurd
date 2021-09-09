import { TestBed } from '@angular/core/testing';

import { EmployregService } from './employreg.service';

describe('EmployregService', () => {
  let service: EmployregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
