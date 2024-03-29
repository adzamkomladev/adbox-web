import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@adbox/shared/data-access';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if (!auth.isLoggedIn()) {
    const router = inject(Router);
    router.navigateByUrl(`auth/login?returnUrl=${route.url}`);

    return false;
  }

  return true;
};
