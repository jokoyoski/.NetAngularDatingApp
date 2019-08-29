import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginatedResult } from 'Model/pagination';
import { UserLike } from 'Model/UserLike';

@Injectable()

export class ListsResolver implements Resolve<PaginatedResult<UserLike[]>> {
pageNumber = 1;
pageSize = 5;
likesParam = 'Likers';
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<PaginatedResult<UserLike[]>> {

// tslint:disable-next-line: whitespace
console.log(this.likesParam);
return this.userService.GetUserLikes(this.pageNumber, this.pageSize, this.likesParam).pipe(


        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null);
        }


        )
    );
}
}
