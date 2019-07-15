import { Component, OnInit } from '@angular/core';
import { User } from 'Model/user';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
users:User[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }
  getUsersWithRoles()
  {
    this.adminService.getUserRoles().subscribe((users:User[])=>{
      console.log(users);
      this.users=users;
    },error=>{
      console.log(error);
    })
  }
}
