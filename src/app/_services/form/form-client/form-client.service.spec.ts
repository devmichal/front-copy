import { TestBed } from '@angular/core/testing';

import { FormClientService } from './form-client.service';

describe('FormClientService', () => {
  let service: FormClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
