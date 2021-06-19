import { TestBed } from '@angular/core/testing';

import { ApirankingService } from './apiranking.service';

describe('ApirankingService', () => {
  let service: ApirankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
