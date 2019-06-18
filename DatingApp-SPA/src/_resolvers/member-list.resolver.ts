import { Injectable } from '@angular/core';
import { User } from 'Model/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginatedResult } from 'Model/pagination';

@Injectable()

export class MemberListResolver implements Resolve<PaginatedResult<User[]>> {
pageNumber = 1;
pageSize = 5;
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<PaginatedResult<User[]>> {
    console.log('ok');
// tslint:disable-next-line: whitespace
    return this.userService.getUsers(this.pageNumber,this.pageSize).pipe(


        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null);
        }


        )
    );
}
}
