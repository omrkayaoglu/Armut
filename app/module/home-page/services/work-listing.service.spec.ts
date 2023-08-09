import { TestBed } from '@angular/core/testing';

import { WorkListingService } from './work-listing.service';

describe('WorkListingService', () => {
  let service: WorkListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
