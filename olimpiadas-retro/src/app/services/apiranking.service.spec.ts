import { TestBed } from '@angular/core/testing';

import { ApiRankingService } from './apiranking.service';

describe('ApirankingService', () => {
  let service: ApiRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
