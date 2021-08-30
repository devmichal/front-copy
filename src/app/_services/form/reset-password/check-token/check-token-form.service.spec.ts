import { TestBed } from '@angular/core/testing';

import { CheckTokenFormService } from './check-token-form.service';

describe('CheckTokenFormService', () => {
  let service: CheckTokenFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTokenFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
