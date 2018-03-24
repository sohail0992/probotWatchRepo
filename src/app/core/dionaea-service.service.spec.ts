import { TestBed, inject } from '@angular/core/testing';

import { DionaeaService } from './dionaea-service.service';

describe('DionaeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DionaeaService]
    });
  });

  it('should be created', inject([DionaeaService], (service: DionaeaService) => {
    expect(service).toBeTruthy();
  }));
});
