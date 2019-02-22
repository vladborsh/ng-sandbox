import { TestBed } from '@angular/core/testing';

import { PseudoBackendService } from './pseudo-backend.service';

describe('PseudoBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PseudoBackendService = TestBed.get(PseudoBackendService);
    expect(service).toBeTruthy();
  });
});
