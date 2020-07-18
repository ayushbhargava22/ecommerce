import { TestBed } from '@angular/core/testing';

import { BabysuitService } from './babysuit.service';

describe('BabysuitService', () => {
  let service: BabysuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabysuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
