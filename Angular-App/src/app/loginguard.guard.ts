import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

export const loginguardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const loggeddata=localStorage.getItem('loginuser');
  if(loggeddata!=null){
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }
};

