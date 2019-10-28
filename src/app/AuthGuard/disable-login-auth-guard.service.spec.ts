import { TestBed } from '@angular/core/testing';

import { DisableLoginAuthGuardService } from './disable-login-auth-guard.service';

describe('DisableLoginAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisableLoginAuthGuardService = TestBed.get(DisableLoginAuthGuardService);
    expect(service).toBeTruthy();
  });
});
