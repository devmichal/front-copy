import { TestBed } from '@angular/core/testing';

import { FormWalletService } from './form-wallet.service';

describe('FormWalletService', () => {
  let service: FormWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
