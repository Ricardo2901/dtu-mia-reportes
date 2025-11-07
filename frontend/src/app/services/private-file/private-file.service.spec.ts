import { TestBed } from '@angular/core/testing';

import { PrivateFileService } from './private-file.service';

describe('PrivateFileService', () => {
  let service: PrivateFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
