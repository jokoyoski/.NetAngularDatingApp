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

pic = '../../assets/web/images/user.png';
result: any;
photoUrl = new BehaviorSubject<string>('../../assets/web/images/user.png');
currentPhotoUrl = this.photoUrl.asObservable();
  jwtHelper = new JwtHelperService();
   loginURl = 'http://localhost:5000/api/auth/Login';
   Gender: any;
   registerURL = 'http://localhost:5000/api/auth/register';
  httpClient: any;
constructor(private http: HttpClient) { }

canMemberChangePhoto(photoUrl: string) {


this.photoUrl.next(photoUrl);   // the behaviour subject has a next attr which signifies the next value
}

login(model: any) {
        return this.http.post(this.loginURl, model).pipe( // the post is an observable so we always need to pipe an observable

          map((response: any) => {   // maping of the values

            this.result = response;


            if (this.result) {

              localStorage.setItem('token', this.result.token);
              localStorage.setItem('gender', this.result.gender);




              this.decodedToken = this.jwtHelper.decodeToken(this.result.token);  // decoding token



              localStorage.setItem('userId', this.decodedToken.nameid);
              localStorage.setItem('userName', this.decodedToken.unique_name);

              this.decodedTokenName = this.decodedToken.unique_name;

              if (this.result.photoUrl !== undefined) {
                localStorage.setItem('picUrl', this.result.photoUrl);
                console.log(this.result.photoUrl);
                this.canMemberChangePhoto(this.result.photoUrl);
                }



            }
          })
        );



        }

        Upload(file: File) {
          const tokenId = localStorage.getItem('userId');
          const url = 'http://localhost:5000/api/photos/' + tokenId + '/savePhoto';
          const fd = new FormData();
          fd.append('FormFile', file, file.name);
          return this.http.post(url, fd);
        }
  MakeMain(photoId: number) {
    const tokenId = localStorage.getItem('userId');
    const url = 'http://localhost:5000/api/photos/' + photoId + '/' + tokenId + '/updatePhoto';
    return this.http.get(url);

  }


        register(model: any) {
          return this.http.post(this.registerURL, model);
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
            const url = 'http://localhost:5000/api/photos/' + photoId + '/' + tokenId + '/deletePhoto';
            return this.http.get(url);
}
}
