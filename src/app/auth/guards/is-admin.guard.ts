import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('admin') === 'isAdmin')
    return true;

  router.navigateByUrl('');
  return false;
};
