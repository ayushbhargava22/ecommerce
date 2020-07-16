import { TestBed } from '@angular/core/testing';

import { BabyproductService } from './babyproduct.service';

describe('BabyproductService', () => {
  let service: BabyproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
