import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScriptsloaderService } from '../Services/scriptsloader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   registerMode: any = false;
   values: any;
  constructor(private http: HttpClient, private fileInjectorService: ScriptsloaderService) { }

  ngOnInit() {
    /** spinner starts on init */
    
    // this.fileInjectorService.loadJS('misc','easy','flexslider','wow','wowinit').then(data => {
     // console.log('script loaded',data);
    // }).catch(error => console.log(error));
    // this.getValue();
  }
    displayToggle() {
         this.registerMode = true;   // toggle  returns truw
    }
    cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
    getValue() {
    console.log('ok');
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
      console.log(this.values);
  }, error => {
 console.log(error);
  });
    }
}
