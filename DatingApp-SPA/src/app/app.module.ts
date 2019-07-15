import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
// tslint:disable-next-line: import-spacing
import {TimeAgoPipe}  from 'time-ago-pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from './Services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './Services/error.interceptor';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './members/Member-List/Member-List.component';
import { MessagesComponent } from './Messages/Messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './Services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from 'src/_resolvers/member-detail.resolver';
import { MemberListResolver } from '../_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from '../_resolvers/member-edit.resolver';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { ScriptsloaderService } from './Services/scriptsloader.service';
import { ListsResolver } from 'src/_resolvers/lists.resolver';
import { MessageResolver } from 'src/_resolvers/message.resolvers';
import { MemberMessagesComponent } from './members/member-messages/MemberMessages.component';
import { RoleDirective } from 'directives/role.directive';
import { UserManagmentComponent } from './admin/user-managment/user-managment.component';
import { PhotoManagmentComponent } from './admin/photo-managment/photo-managment.component';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';

export function TokenGetter() {
   return localStorage.getItem('token');      // this is the token
}
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AdminPanelComponent,
      HomeComponent,
      RegisterComponent,
      ListComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberEditComponent,
      MemberMessagesComponent,
      MemberDetailComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      RoleDirective,        //directives for role
      UserManagmentComponent,
      PhotoManagmentComponent,
      RolesModalComponent
   ],
   imports: [
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule,
      NgxSpinnerModule,
      ReactiveFormsModule,
     
      BrowserModule,
// tslint:disable-next-line: max-line-length
      FileUploadModule,  // this was added for file uploading  we install the nuget and we pasted what we saw online on the photo-editor .html
          // after we wrote some code on the photo.editor.ts component
      HttpClientModule,
      FormsModule,
     NgxGalleryModule,  // we added this for image gallery and we went ahead to out memeber detail
      RouterModule.forRoot(appRoutes),  // routes.ts was created and it was added here and we user routerlink on view
      JwtModule.forRoot({




         config: {
            tokenGetter: TokenGetter
         ,
// tslint:disable-next-line: max-line-length  //
       whitelistedDomains: ['jokoyoski200-001-site1.itempurl.com'],  // we just got the token from (Token Getter function above) and we  send request , it is automatically sending token
       blacklistedRoutes: ['jokoyoski200-001-site1.itempurl.com/api/auth']  // we dont want to send token to this address
      }
      })
   ],
   providers: [

      AuthService,
      ErrorInterceptorProvider,   // errror interceptor was created and it was used in the register
     AuthGuard,
// tslint:disable-next-line: max-line-length
     // this is the guard that was created when user needs to login, it was created and imported through app.module.ts and was used in the routes;
     UserService,
     ScriptsloaderService,
     MemberListResolver,
     MemberEditResolver,
     MessageResolver,
     ListsResolver,

   MemberDetailResolver   // we created a resolver class and we
   // add the memeber resolver because here we want to be using it to catch null value .after
   // we add it here we went to the routes we created and added resolver there
   // later then we went to our membetdetail class and got our value from route
],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
