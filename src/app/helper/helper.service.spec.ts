import { TestBed } from '@angular/core/testing';

import { ServicelabelService } from './servicelabel.service';

describe('ServicelabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicelabelService = TestBed.get(ServicelabelService);
    expect(service).toBeTruthy();
  });
});
