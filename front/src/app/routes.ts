import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BoardComponent } from './board/board.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdNewComponent } from './ad-new/ad-new.component';
import { MyprofileEditComponent } from './myprofile-edit/myprofile-edit.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { CoinEvolutionComponent } from './coin-evolution/coin-evolution.component';
import { LandingComponent } from './landing/landing.component';
import { CanDeactivateGuard } from '../services/can-deactivate.service';

export const routes: Routes = [
  { path:'signup', component:SignupComponent, canDeactivate:[CanDeactivateGuard]},
  { path:'login', component:LoginComponent},
  { path:'profile', component:MyprofileComponent},
  { path:'edit/:id', component:MyprofileEditComponent, canDeactivate:[CanDeactivateGuard]},
  { path:'ads', component:BoardComponent},
  { path:'ad/:id', component: AdDetailComponent },
  { path:'ads/new', component: AdNewComponent, canDeactivate:[CanDeactivateGuard]},
  { path:'ad/edit/:id', component: AdEditComponent},
  { path:'evolution', component:CoinEvolutionComponent},
  { path:'', component: LandingComponent}
];
