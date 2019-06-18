import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router,private alertify:AlertifyService){}
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  
  canActivate(

):boolean
{
  if(this.authService.loggedIn())  //if the user is loggedIn
  {
    return true;
  }
  this.alertify.warning("You shall not Pass !!!");
  this.router.navigate(['/home']);  // navigate to home
  return false;
}}


//this is the guard that was created when user needs to login, it was created and imported through app.module.ts and was used in the routes;