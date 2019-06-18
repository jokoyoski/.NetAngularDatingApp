import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../Services/user.service';
import { User } from 'Model/user';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
    [x: string]: any;
user: User;
photoUrl: string;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private UserService: UserService, private alertify: AlertifyService, private route: ActivatedRoute,
              private authService: AuthService) { }


  ngOnInit(


  ) {
    this.authService.currentPhotoUrl.subscribe((photoUrl) => {
      console.log(photoUrl);
      this.photoUrl = photoUrl;

    });
    this.route.data.subscribe(data => {
      this.user = data.user;


   // console.log(this.user.gendero);

    });
  }

  updateUser() {
    this.UserService.UpdateUser(this.authService.decodedToken.nameid, this.user ).subscribe((data) => {
      console.log(data);
    }, error => console.log(error));
    this.alertify.success('Updated Succesfully');

  }
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}
