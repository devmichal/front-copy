import { TestBed } from '@angular/core/testing';

import { NewPasswordFormService } from './new-password-form.service';

describe('NewPasswordFormService', () => {
  let service: NewPasswordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPasswordFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
