import { TestBed } from '@angular/core/testing';

import { SecureHttpInterceptor } from './secure-http.interceptor';

describe('SecureHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecureHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecureHttpInterceptor = TestBed.inject(SecureHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
