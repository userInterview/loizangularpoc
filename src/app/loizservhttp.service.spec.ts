import { TestBed } from '@angular/core/testing';

import { LoizservhttpService } from './loizservhttp.service';

describe('LoizservhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoizservhttpService = TestBed.get(LoizservhttpService);
    expect(service).toBeTruthy();
  });
});
