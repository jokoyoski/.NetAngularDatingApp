import { Component, OnInit, ViewChild } from '@angular/core';
// import {  NgxGalleryImage, NgxGalleryAnimation, NgxGalleryOptions } from 'ngx-gallery';

import { User } from 'Model/user';

import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
 @ViewChild('memberTabs') memberTabs: TabsetComponent;
 user: User;
 galleryOptions: NgxGalleryOptions[];  // for imaage gallery
 galleryImages: NgxGalleryImage[];   // for image gallry
                                             // we need to activate the route to access the parameter
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.data.subscribe(data => {
     this.user = data.user;

     console.log(this.user);
   });
    // image gallery
   this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];
     // this is the third thing we do after adding to app.module.ts and also adding the above code for this.gallrry
  // we need to write a code to pass a list of photos
   this.galleryImages = this.getImages();


   this.route.queryParams.subscribe(params => {
    const selectedTab = params.tab;
    this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
// tslint:disable-next-line: semicolon
  })

  }



  getImages() {
    const photosURL = [];
   // console.log(this.user.photos);
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.user.photos.length; i++) {

     photosURL.push({
       small: this.user.photos[i].uRl,
       medium: this.user.photos[i].uRl,
       big: this.user.photos[i].uRl,
       description: this.user.photos[i].uRl,




      });
    }

    return photosURL;

  }
  selectTab(tabId: number) {
    console.log(tabId);
    this.memberTabs.tabs[tabId].active = true;
  }
    }



    // this.UserService.getUser(+this.route.snapshot.params['id']).subscribe((data:User)=>{

     // console.log(data);
       // this.user=data;

