import { Component, OnInit, Input } from '@angular/core';
import { User } from 'Model/user';
import { Like } from 'Model/Like';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() user: User;
  like: any={};
   
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }




  ngOnInit() {
   console.log(this.user);
  }

  sendLike(likerId: number) {
    // tslint:disable-next-line:prefer-const
    let userId = localStorage.getItem('userId');
    this.like.LikerId = userId;
    this.like.LikeeId = likerId;
    console.log(this.like);
    const id = this.userService.LikeUser(this.like).subscribe((data:any) => {
    this.alertify.success(data.status);
    
    }, (error) => {
      this.alertify.error(error);


    });

  }
  }
