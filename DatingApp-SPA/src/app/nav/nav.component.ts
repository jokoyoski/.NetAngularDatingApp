import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertifyService } from '../Services/alertify.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model: any = {};
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  photoUrl: string;
  constructor(public authService: AuthService,
              private alertifyService: AlertifyService, private router: Router) { }
      // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts
  // ngForm  is the form itself so we give it a name and we need to add its module FormsModule
  // Id:number;

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe((photoUrl) => {
      console.log(photoUrl);
      this.photoUrl = photoUrl;

    });
    const code = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(code);  // decoding token
    console.log('joko 1');
  }
  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(value => console.log(value),


     (error) => {
      console.log(error);
    }, () => {
      this.router.navigate(['/member']);   // redirect users to the memeber page when they login
    });
  }

  loggedIn() {


   return this.authService.loggedIn();

  }
  loggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('picUrl');

    this.alertifyService.success('logged Out');
    this.router.navigate(['/home']);  // navigate to home, this was done by setting up the route.ts, setting some route there
    // then coming to add RouteModule in app.module.ts and then injcting the module in the nav.component.ts

  }

}
