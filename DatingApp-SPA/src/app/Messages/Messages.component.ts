import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AlertifyService } from '../Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'Model/Message';
import { Pagination, PaginatedResult } from 'Model/pagination';

@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  paginated: Pagination;
  messageContainer: 'Unread';

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {   // the value has been passed to the resolver and we subscribe to it
      console.log(data.messages.result);
      this.messages = data.messages.result;
      this.paginated = data.messages.pagination;


    });


  }
loadMessages() {
  console.log('joko');
  this.userService.getMessages(this.paginated.currentPage, this.paginated.itemsPerPage, this.messageContainer)
  .subscribe((res: PaginatedResult<Message[]>) => {

    this.messages = res.result;
    console.log(this.messages);
    this.paginated = res.pagination;
  }, error => {
    this.alertify.error(error);
  });
}
deleteMessage(id: number) {
const userId = localStorage.getItem('userId');

this.alertify.confirm('Are you sure you want to delete ?', () => {
this.userService.deleteMessage(id, userId).subscribe((data: any) => {
console.log(data.message);
// tslint:disable-next-line: triple-equals
this.messages.splice(this.messages.findIndex(m => m.id == id), 1);
this.alertify.success(data.message);
}, error => {
  this.alertify.error(error);
});

});
}
pageChanged(event: any): void {
  
  this.paginated.currentPage = event.page;
  console.log(this.paginated.currentPage);
  this.loadMessages();
}
}
