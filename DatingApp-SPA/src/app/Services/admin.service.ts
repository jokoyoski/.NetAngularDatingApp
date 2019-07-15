import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseUrl=environment.api;

constructor(private httpClient:HttpClient) { }
getUserRoles()
{
  console.log('err');
  return this.httpClient.get(this.baseUrl+'admin/GetUsersRole');
}
}


