import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { AuthService } from '@adbox/shared/data-access';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: { Authentication: `Bearer: ${token}` }
  });

  return next(authReq);
}