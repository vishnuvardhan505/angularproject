import { TestBed } from '@angular/core/testing';

import { CrudeserviceService } from './crudeservice.service';

describe('CrudeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudeserviceService = TestBed.get(CrudeserviceService);
    expect(service).toBeTruthy();
  });
});
