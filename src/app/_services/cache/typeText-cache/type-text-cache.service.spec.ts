import { TestBed } from '@angular/core/testing';

import { TypeTextCacheService } from './type-text-cache.service';

describe('TypeTextCacheService', () => {
  let service: TypeTextCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTextCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
