import { TestBed, inject } from '@angular/core/testing';

import { UpdatefavService } from './updatefav.service';

describe('UpdatefavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatefavService]
    });
  });

  it('should be created', inject([UpdatefavService], (service: UpdatefavService) => {
    expect(service).toBeTruthy();
  }));
});
