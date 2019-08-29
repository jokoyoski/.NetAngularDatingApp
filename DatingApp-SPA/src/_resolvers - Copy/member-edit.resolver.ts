import { Injectable } from '@angular/core';
import { User } from 'Model/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class MemberEditResolver implements Resolve<User> {
    jwtHelper = new JwtHelperService();
    decodedToken: any;
// tslint:disable-next-line: max-line-length
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService, private authService: AuthService) {}

resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const code = localStorage.getItem('token');

    this.decodedToken = this.jwtHelper.decodeToken(code);  // decoding token

    return this.userService.getUser(this.decodedToken.nameid).pipe(


        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null);
        }


        )
    );
}
}
