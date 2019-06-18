import { Component, OnInit } from '@angular/core';
import { User } from 'Model/user';

import { AlertifyService } from '../../Services/alertify.service';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'Model/pagination';
import { Like } from 'Model/Like';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Member-List',
  templateUrl: './Member-List.component.html',
  styleUrls: ['./Member-List.component.css']
})
export class MemberListComponent implements OnInit {
 users: any;
 user: any ;
 like: Like;
 Gender: any;
 genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'females'}];
 activity: any = [{value: 'lastactive', display: 'Last Active'}, {value: 'lastcreated', display: 'New Members'}];
 userParams: any = {};
 pagination: Pagination;
 totalPages: number;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.data.subscribe(data => {   // the value has been passed to the resolver and we subscribe to it
      console.log(data.users.result);
      this.users = data.users.result;
      this.pagination = data.users.pagination;
      this.Gender =    localStorage.getItem('gender');
      this.userParams.gender = this.Gender === 'female' ? 'male' : 'female';

    });
   // this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';

     }

     likeUsers(likerId: number) {
       // tslint:disable-next-line:prefer-const
       let userId = localStorage.getItem('userId');
       this.like.LikerId = likerId;
       this.like.LikeeId = userId;
       const id = this.userService.LikeUser(this.like).subscribe((data) => {
console.log(data);

       }, (error) => {
         console.log(error);


       });

     }
     resetFilters()
// tslint:disable-next-line: one-line
     {





       this.userParams.gender = this.Gender === 'female' ? 'male' : 'female';
       this.userParams.activity = 'lastactive';
       this.pagination.currentPage = 1;

       this.loadUsers();
     }
     pageChanged(event: any): void {
       console.log('joko');
       this.pagination.currentPage = event.page;
       console.log(this.pagination.currentPage);
       this.loadUsers();
    }

    loadUsers() {


       this.userParams.minAge =  this.userParams.minAge === undefined ? 18 : this.userParams.minAge;
       this.userParams.maxAge =  this.userParams.maxAge === undefined ? 99 : this.userParams.maxAge;

       this.userParams.activity = this.userParams.activity === undefined ? 'lastactive' : this.userParams.activity;

       console.log(this.pagination.currentPage) ;
// tslint:disable-next-line: max-line-length
       this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe((res: PaginatedResult<User[]>) => {


        this.users = res.result;
        this.pagination = res.pagination;
      }, error => this.alertify.error(error));
    }
}
