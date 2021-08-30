import { TestBed } from '@angular/core/testing';

import { SendTokenFormService } from './send-token-form.service';

describe('SendTokenFormService', () => {
  let service: SendTokenFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendTokenFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
