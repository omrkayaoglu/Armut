import { TestBed } from '@angular/core/testing';

import { WorkCategoryService } from './work-category.service';

describe('WorkCategoryService', () => {
  let service: WorkCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
