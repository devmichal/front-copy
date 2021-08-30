import { TestBed } from '@angular/core/testing';

import { FormTaskService } from './form-task.service';

describe('FormTaskService', () => {
  let service: FormTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
