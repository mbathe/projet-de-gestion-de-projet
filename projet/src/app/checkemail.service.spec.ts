import { TestBed } from '@angular/core/testing';

import { CheckemailService } from './checkemail.service';

describe('CheckemailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckemailService = TestBed.get(CheckemailService);
    expect(service).toBeTruthy();
  });
});
