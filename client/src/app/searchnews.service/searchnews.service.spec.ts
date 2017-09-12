import { TestBed, inject } from '@angular/core/testing';

import { SearchnewsService } from './searchnews.service';

describe('SearchnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchnewsService]
    });
  });

  it('should be created', inject([SearchnewsService], (service: SearchnewsService) => {
    expect(service).toBeTruthy();
  }));
});
