import { TestBed } from '@angular/core/testing';

import { AgricultureService } from './agriculture.service';

describe('AgricultureService', () => {
  let service: AgricultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgricultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
