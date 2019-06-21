import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
decodedToken: any;
decodedTokenName: any;
userPic: any;

  pic: any = '../../assets/web/images/user.png';
result: any;
photoUrl = new BehaviorSubject<string>('../../assets/web/images/user.png');
currentPhotoUrl = this.photoUrl.asObservable();
  jwtHelper = new JwtHelperService();
  
   Gender: any;
   mainUrl ='http://jokoyoski200-001-site1.itempurl.com/api/';
   registerURL = 'http://localhost:5000/api/';
  httpClient: any;
constructor(private http: HttpClient) { }

canMemberChangePhoto(photoUrl: string) {


this.photoUrl.next(photoUrl);   // the behaviour subject has a next attr which signifies the next value
}

login(model: any) {

        return this.http.post('http://jokoyoski200-001-site1.itempurl.com/api/auth/Login', model)
        .pipe( // the post is an observable so we always need to pipe an observable

          map((response: any) => {   // maping of the values

            this.result = response;


            if (this.result) {

              localStorage.setItem('token', this.result.token);
              localStorage.setItem('gender', this.result.gender);




              this.decodedToken = this.jwtHelper.decodeToken(this.result.token);  // decoding token



              localStorage.setItem('userId', this.decodedToken.nameid);
              localStorage.setItem('userName', this.decodedToken.unique_name);

              this.decodedTokenName = this.decodedToken.unique_name;
              console.log(this.result.photoUrl);

              if (this.result.photoUrl !== null) {
                localStorage.setItem('picUrl', this.result.photoUrl);
                this.userPic = this.result.photoUrl;
                this.canMemberChangePhoto(this.result.photoUrl);
                } else {
                  this.canMemberChangePhoto(this.pic);
                  localStorage.setItem('picUrl', this.pic);
                }



            }
          })
        );



        }

        Upload(file: File) {
          const tokenId = localStorage.getItem('userId');
          const url = this.mainUrl + 'photos/' + tokenId + '/savePhoto';
          const fd = new FormData();
          fd.append('FormFile', file, file.name);
          return this.http.post(url, fd);
        }
  MakeMain(photoId: number) {
    const tokenId = localStorage.getItem('userId');
    const url =  this.mainUrl + 'photos/' + photoId + '/' + tokenId + '/updatePhoto';
    return this.http.get(url);

  }


        register(model: any) {
          return this.http.post('http://jokoyoski200-001-site1.itempurl.com/api/Auth/Register', model);
        }
          loggedIn() {
          const token = localStorage.getItem('token');

          const tokens = this.jwtHelper.isTokenExpired(token);

          if (tokens === false) {

            return true;
          }
          return false;
        }



          DeletePhoto(photoId: number) {
            const tokenId = localStorage.getItem('userId');
            const url =  this.mainUrl + 'photos/' + photoId + '/' + tokenId + '/deletePhoto';
            return this.http.get(url);
}
}
