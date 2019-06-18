import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'Model/Message';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-MemberMessages',
  templateUrl: './MemberMessages.component.html',
  styleUrls: ['./MemberMessages.component.css']
})
export class MemberMessagesComponent implements OnInit {

   @Input() recipientId: number;  // pass id to child
   messages: Message[];
   anyMessage: any = {};

   constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.loadMessages();
  }

  loadMessages() {

    const id =  localStorage.getItem('userId');
    const userId = + localStorage.getItem('userId');

    this.userService.getMessageThread(id, this.recipientId).pipe(
tap(messages => {
// tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < messages.length; i++) {
// tslint:disable-next-line: triple-equals
if (messages[i].isRead == false && messages[i].recipientId == userId) {
    console.log(messages[i]);
  this.userService.markAsRead(messages[i].id, userId);
 }
  }
})

    )
  .subscribe((res: Message[]) => {

    console.log(res);
    res === undefined ? res = this.messages : res = res;
    this.messages = res;
    console.log(this.messages);
  }, error => {
   this.alertify.error(error);
  });


}
sendMessage() {
  this.alertify.success('ok');
  const id = localStorage.getItem('userId');
  this.anyMessage.recipientId = this.recipientId;
  this.anyMessage.userId = id;
  this.userService.sendMessage(this.anyMessage).subscribe((message: any) => {
    console.log(message);

    this.messages.unshift(message);
    this.anyMessage = '';

 }, error => {
  this.alertify.error(error);
 });
}

}
