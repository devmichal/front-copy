import { TestBed } from '@angular/core/testing';

import { TransferTextService } from './transfer-text.service';

describe('TransferTextService', () => {
  let service: TransferTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
