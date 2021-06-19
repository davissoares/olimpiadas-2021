import { TestBed } from '@angular/core/testing';

import { ApimodalidadeService } from './apimodalidade.service';

describe('ApimodalidadeService', () => {
  let service: ApimodalidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimodalidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
