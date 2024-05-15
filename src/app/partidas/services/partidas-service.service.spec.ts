import { TestBed } from '@angular/core/testing';

import { PartidasServiceService } from './partidas-service.service';

describe('PartidasServiceService', () => {
  let service: PartidasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
