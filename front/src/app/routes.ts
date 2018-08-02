import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BoardComponent } from './board/board.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdNewComponent } from './ad-new/ad-new.component';

export const routes: Routes = [
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'profile', component:MyprofileComponent},
  { path:'ads', component:BoardComponent},
  { path:'ad/:id', component: AdDetailComponent },
  { path:'ads/new', component: AdNewComponent},
];
