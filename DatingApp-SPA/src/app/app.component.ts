import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './Services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatingApp-SPA';

  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService, private spinner: NgxSpinnerService) {

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        console.log('okkkk');
    }, 50000);
    const token = localStorage.getItem('token');
    const url = localStorage.getItem('picUrl');

    const user = localStorage.getItem('userName');
    console.log('name', user);
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }


    if (user) {
      this.authService.decodedTokenName = user;

    }

    if (url) {
      console.log(url)
      this.authService.userPic = url;

      this.authService.canMemberChangePhoto(url);
    }
  }
}
