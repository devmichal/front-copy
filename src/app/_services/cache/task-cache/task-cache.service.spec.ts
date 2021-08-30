import { TestBed } from '@angular/core/testing';

import { TaskCacheService } from './task-cache.service';

describe('TaskCacheService', () => {
  let service: TaskCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
