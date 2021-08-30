import { TestBed } from '@angular/core/testing';

import { CacheSupportService } from './cache-support.service';

describe('CacheSupportService', () => {
  let service: CacheSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
