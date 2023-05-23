import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const oauthService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!oauthService.isLoggedIn()) {
    router.navigate(['login']);
  }
  return oauthService.isLoggedIn();
};
