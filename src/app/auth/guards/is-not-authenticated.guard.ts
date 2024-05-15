import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('token'))
    return true;

  router.navigateByUrl('');
  return false;
};
