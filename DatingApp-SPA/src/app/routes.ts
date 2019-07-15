import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MessagesComponent } from './Messages/Messages.component';
import { MemberListComponent } from './members/Member-List/Member-List.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from 'src/_resolvers/member-detail.resolver';
import { MemberListResolver } from 'src/_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from 'src/_resolvers/member-edit.resolver';
import { RegisterComponent } from './register/register.component';
import { ListsResolver } from 'src/_resolvers/lists.resolver';
import { MessageResolver } from 'src/_resolvers/message.resolvers';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

export  const appRoutes: Routes = [

{path: '', component : HomeComponent },
{
path:'',
runGuardsAndResolvers:'always',
canActivate:[AuthGuard],
children:[
// tslint:disable-next-line: max-line-length
{path: 'members/:id', component : MemberDetailComponent, resolve: {user: MemberDetailResolver} },  // we specify this for url that has parameter


{path: 'likes', component : ListComponent,  canActivate: [AuthGuard],resolve: {users: ListsResolver} }, 
 

{path: 'member/edit', component : MemberEditComponent, resolve: {user: MemberEditResolver}  },
{path: 'Messages', component : MessagesComponent,resolve:{messages:MessageResolver} },
{path: 'members', component : MemberListComponent , resolve: {users: MemberListResolver}},
{path: 'admin', component : AdminPanelComponent, data:{roles:['Admin']}},



]
},

{path: 'Register', component : RegisterComponent },
{path: '**', redirectTo: 'Home', pathMatch: 'full' }


];
