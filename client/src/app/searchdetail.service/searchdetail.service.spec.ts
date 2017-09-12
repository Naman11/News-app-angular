import { TestBed, inject } from '@angular/core/testing';

import { SearchdetailService } from './searchdetail.service';

describe('SearchdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchdetailService]
    });
  });

  it('should be created', inject([SearchdetailService], (service: SearchdetailService) => {
    expect(service).toBeTruthy();
  }));
});
