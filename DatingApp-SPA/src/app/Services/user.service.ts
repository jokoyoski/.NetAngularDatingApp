import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from 'Model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PaginatedResult } from 'Model/pagination';
import { map } from 'rxjs/operators';
import { UserLike } from 'Model/UserLike';
import { Like } from 'Model/Like';
import { Message } from 'Model/Message';




@Injectable({
  providedIn: 'root'
})
export class UserService {
baseURL = environment.apiURL;

constructor(private httpClient: HttpClient) { }



getUsers(page?, itemsPerPage?, userParams? ): Observable<PaginatedResult<User[]>> {

  const paginatedResult: PaginatedResult<User[]> = new PaginatedResult();
  let params = new HttpParams();
  if (page != null && itemsPerPage != null) {
params = params.append('PageNumber', page);
params = params.append('PageSize', itemsPerPage);
  }
  if (userParams != null) {
    params = params.append('minAge', userParams.minAge );
    params = params.append('maxAge', userParams.maxAge);
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.activity);
  }
  console.log(params);

  console.log(this.baseURL);

  return this.httpClient.get<User[]>('http://localhost:5000/api/users', {observe: 'response', params}).pipe(map(

  response => {

    paginatedResult.result = response.body;

    if (response.headers.get('Pagination') != null) {
console.log( JSON.parse(response.headers.get('Pagination')));
paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
    }
    return paginatedResult;
  }

  ));

  console.log(this.baseURL);
}

GetUserLikes(page?, itemsPerPage?, userParams?): Observable<PaginatedResult<UserLike[]>> {

  const paginatedResult: PaginatedResult<UserLike[]> = new PaginatedResult();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
params = params.append('PageNumber', page);
params = params.append('PageSize', itemsPerPage);
  }
  console.log(userParams);
  if (userParams != null) {

    params = params.append('UserStatusLikes', userParams);


  }
  console.log(params);

  return this.httpClient.get<UserLike[]>('http://localhost:5000/api/users/getuserlike', {observe: 'response', params}).pipe(map(

  response => {

   console.log(response);

   paginatedResult.result = response.body;

   if (response.headers.get('Pagination') != null) {
console.log( JSON.parse(response.headers.get('Pagination')));
paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
   }
   return paginatedResult;
  }

  ));

  console.log(this.baseURL);
}
// tslint:disable-next-line:ban-types
UpdateUser(id, model: User): Observable<Object> {
  // tslint:disable-next-line:ban-types
  return this.httpClient.put<Object>('http://localhost:5000/api/users/' + id, model);
}



getUser(id): Observable<User> {
  console.log(id);
  return this.httpClient.get<User>('http://localhost:5000/api/users/GetUser?id=' + id);
}



LikeUser(like: Like): Observable<Object> {



console.log(like);
  return this.httpClient.post<Object>('http://localhost:5000/api/users/likeuser', like).pipe(map(response => {
    console.log(response);

    return response;
  }));

}

getMessageThread(id: string, recipientId: number) {
return this.httpClient.get<Message[]>('http://localhost:5000/api/message/GetMessageThread?userId=' + id + '&recipientId=' + recipientId);
}

getMessages(page?, itemsPerPage?, messageContainer?): Observable<PaginatedResult<Message[]>> {
  const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();
  let params = new HttpParams();


  if (page != null && itemsPerPage != null) {
    params = params.append('PageNumber', page);
    params = params.append('PageSize', itemsPerPage);
  }
  params = params.append('MessageContainer', messageContainer);

  const id = localStorage.getItem('userId');

  return this.httpClient.get<Message[]>('http://localhost:5000/api/message/GetMessageForUser?userId=' + id,
   {observe: 'response', params}).pipe(map(response => {

paginatedResult.result = response.body;
if (response.headers.get('Pagination') != null) {
  console.log( JSON.parse(response.headers.get('Pagination')));
  paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
     }
return paginatedResult;
  }));
}

sendMessage(message: any) {
 
  return this.httpClient.post<Message>('http://localhost:5000/api/message/CreateMessage?userId=' + message.userId, message);
}
deleteMessage(id: number, userId: string) {
  return this.httpClient.get<Object>('http://localhost:5000/api/message/DeleteMessage?MessageId=' + id + '&userId=' + userId);
}
markAsRead(id: number, userId: number) {
  console.log(3);
  return this.httpClient.get<Object>('http://localhost:5000/api/message/MarkAsRead?userId=' + userId + '&id=' + id).subscribe();

}
}

