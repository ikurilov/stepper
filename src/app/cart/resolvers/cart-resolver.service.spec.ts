import { TestBed, inject } from '@angular/core/testing';

import { CartResolverService } from './cart-resolver.service';

describe('CartResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartResolverService]
    });
  });

  it('should be created', inject([CartResolverService], (service: CartResolverService) => {
    expect(service).toBeTruthy();
  }));
});
