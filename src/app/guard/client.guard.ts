import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate{

  constructor(
    public authService: AuthService,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.state && this.authService.login.profile['profile'] == 'Cliente'){

          return true;
        }
        this.router.navigate(['/nosotros'], { queryParams: { returnUrl: state.url } });
        return false;
  }

}
