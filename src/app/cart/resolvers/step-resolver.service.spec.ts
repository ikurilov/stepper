import { TestBed, inject } from '@angular/core/testing';

import { StepResolverService } from './step-resolver.service';

describe('StepResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepResolverService]
    });
  });

  it('should be created', inject([StepResolverService], (service: StepResolverService) => {
    expect(service).toBeTruthy();
  }));
});
