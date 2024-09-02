import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { UserService } from '../Services/user.service';




export const authGuard: CanActivateFn = (route, state) => {

  let value = localStorage.getItem("token")

  const router = inject(Router);
  
  if (value == null){
    return router.createUrlTree(['/login']);
    
    // return router.navigate(['login']);
  }else {
     return true
  }
};

