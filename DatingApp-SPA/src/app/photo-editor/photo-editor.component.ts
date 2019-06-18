import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { Photo } from 'Model/Photo';
import { AuthService } from '../Services/auth.service';
import { AlertifyService } from '../Services/alertify.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { HttpClient } from '@angular/common/http';
import { pipe } from '@angular/core/src/render3';
import { identifierName } from '@angular/compiler';
import { ErrorCatch } from 'Model/ErrorCatch';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  errors: any;
  selectedFile: File;
  photo: any;
  photoMain: any;
  @Input() photos: Photo[];

  @Output() getMemberChangePhoto = new EventEmitter<string>();
uploader: FileUploader;
 hasBaseDropZoneOver = false;



  // tslint:disable-next-line:max-line-length
  constructor(public authService: AuthService, private http: HttpClient, private alertifyService: AlertifyService, private router: Router) { }   // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts

  ngOnInit() {
    const code = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(code);  // decoding token
   // this.initializeUploader();
    console.log('ok');
  }
  onSelectChange(event) {
  this.selectedFile = event.target.files[0] as File;
  console.log(this.selectedFile);
 }
 MakeMain( id: number) {

   console.log(identifierName);
   return this.authService.MakeMain(id).subscribe((res) => {

    console.log(res);

    this.photo = res;
       // returtn the photo url
    console.log(this.photo.photoUrl, 'res');
    //  this.getMemberChangePhoto.emit(this.photo.photoURl); // emit the url
    this.authService.canMemberChangePhoto(this.photo.photoUrl);


    localStorage.setItem('picUrl', JSON.stringify(this.photo.photoUrl));

    this.errors = res;


    this.alertifyService.success(this.errors.status);
     });
 }

onDelete(photoId: number) {
  this.alertifyService.confirm('Do you want to delete the picture ?', () => {
   this.authService.DeletePhoto(photoId).subscribe((data) => {
      this.photos.splice(this.photos.findIndex(x => x.id === photoId), 1);
      this.alertifyService.success('Picture deleted Successfully');
      }, error => {
        this.alertifyService.success('Error');
      });
  });


}
 OnUpload() {

  console.log(this.selectedFile);
  return this.authService.Upload(this.selectedFile).subscribe((data) => {
    this.alertifyService.success('Picture Uploaded Successfully .');
   });



 }
}
