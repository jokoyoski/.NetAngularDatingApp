import { Component, OnInit } from '@angular/core';
import { Pagination, PaginatedResult } from 'Model/pagination';
import { ActivatedRoute } from '@angular/router';
import { UserLike } from 'Model/UserLike';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pagination: Pagination;
  LikesParam: string;
  datas: boolean;
  users: UserLike[];
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {   // the value has been passed to the resolver and we subscribe to it

      this.users = data.users.result;
      this.pagination = data.users.pagination;
      console.log(this.users.length);
      if (this.users.length < 1) {

          this.datas = false;
      } else {
        this.datas = true;
      }
      console.log(data.users);

      this.LikesParam = 'Likers';

    });

  }
  pageChanged(event: any): void {

    this.pagination.currentPage = event.page;
    console.log(this.pagination.currentPage);
    this.loadUsers();
  }
  loadUsers() {



this.datas = true;
console.log(this.LikesParam);
// tslint:disable-next-line: max-line-length
this.userService.GetUserLikes(this.pagination.currentPage, this.pagination.itemsPerPage, this.LikesParam).subscribe((res: PaginatedResult<UserLike[]>) => {

if (res.result.length < 1) {
  this.datas = false;
}
this.users = res.result;
this.pagination = res.pagination;

   });
 }
}
