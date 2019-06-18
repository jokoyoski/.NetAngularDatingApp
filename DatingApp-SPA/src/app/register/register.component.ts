import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../Services/alertify.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// @Input() ValuesFromHome :any;  //this is where we got the parameter as stated in home html and we pass it to view
// @Output () cancelRegister =new EventEmitter();
// model:any={};



// import into app.module.ts
registerForm: FormGroup;  // this was the first step of the reactive view, then we change the html page to suit reactive
  model: any = {};
  jwtHelper = new JwtHelperService();
  decodedToken: any;
// tslint:disable-next-line: max-line-length
  constructor(public authService: AuthService, private alertifyService: AlertifyService, private router: Router, private  fb: FormBuilder) { }   // a service was created and was injected to this component and before it has to work, we ust have called it in the app.module.ts
  // ngForm  is the form itself so we give it a name and we need to add its module FormsModule
  // Id:number;

  ngOnInit() {
  this.createRegisterForm(); // step 3
  }
  log(x) {
    console.log(x);
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({  // step 2

      Gender : ['male'],
      KnownAs : ['', Validators.required],   //setting the validators
     Country : ['', Validators.required],
      City : ['', Validators.required],
      DateOfBirth: [null, Validators.required],
    UserName: ['', Validators.required],
    Password : ['', [Validators.required, Validators.minLength(4)]],
    ConfirmPassword : ['', Validators.required, ],
    LookingFor: ['female'],
    }, {validator: this.passwordMatchValidator});
  }
  passwordMatchValidator(g: FormGroup) {  //if password are equal

      return g.get('Password').value === g.get('ConfirmPassword').value ? null : {mismatch: true};
    }
  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(value => console.log(value),


     (error) => {
      console.log(error);
    }, () => {
      this.router.navigate(['/members']);   // redirect users to the memeber page when they login
    });
  }

  loggedIn() {

   console.log('joko 2');
   return this.authService.loggedIn();

  }
  loggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('picUrl');
    this.authService.userPic = null;
    this.authService.decodedToken = null;
    this.alertifyService.success('logged Out');
    this.router.navigate(['/home']);  // navigate to home, this was done by setting up the route.ts, setting some route there
    // then coming to add RouteModule in app.module.ts and then injcting the module in the nav.component.ts

  }



  register() {
   if (this.registerForm.valid) {
    this.model = Object.assign({}, this.registerForm.value);
    console.log(this.model);
   }

   this.authService.register(this.model).subscribe((response: any) => {

   this.alertifyService.success(response.success);

  }, (error) => {

    this.alertifyService.error(error);
  }, () => {
  this.authService.login(this.model).subscribe((response: any) => {

    this.router.navigate(['/members']);   // redirect users to the memeber page when they login
  });
  } );

}
}
