import { TestBed } from '@angular/core/testing';

import { MtaService } from './mta.service';

describe('MtaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtaService = TestBed.get(MtaService);
    expect(service).toBeTruthy();
  });
});
