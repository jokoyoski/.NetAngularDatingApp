import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginatedResult } from 'Model/pagination';
import { Message } from 'Model/Message';

@Injectable()

export class MessageResolver implements Resolve<PaginatedResult<Message[]>> {
pageNumber = 1;
pageSize = 5;
messageContainer = 'Unread';
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<PaginatedResult<Message[]>> {
    console.log('ok');
// tslint:disable-next-line: whitespace
    return this.userService.getMessages(this.pageNumber,this.pageSize,this.messageContainer).pipe(


        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null);
        }


        )
    );
}
}
