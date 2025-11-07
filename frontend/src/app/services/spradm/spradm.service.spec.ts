import { TestBed } from '@angular/core/testing';

import { SpradmService } from './spradm.service';

describe('SpradmService', () => {
  let service: SpradmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpradmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
