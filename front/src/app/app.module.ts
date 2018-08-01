import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session';
import { AdService } from '../services/ad.service';
import { HttpModule } from '@angular/http';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BoardComponent } from './board/board.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdNewComponent } from './ad-new/ad-new.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MyprofileComponent,
    BoardComponent,
    AdDetailComponent,
    AdNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
