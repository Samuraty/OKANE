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
import { UserService } from '../services/user.service';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { MyprofileEditComponent } from './myprofile-edit/myprofile-edit.component';
import { CapitalizeFirstPipe} from './pipes/capitalizeFirst.pipe';
import { CoinEvolutionComponent } from './coin-evolution/coin-evolution.component';
import { AdCityFilterPipe, AdHaveFilterPipe, AdWantFilterPipe } from  './pipes/adFilter.pipe';
import { LandingComponent } from './landing/landing.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from '../services/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MyprofileComponent,
    BoardComponent,
    AdDetailComponent,
    AdNewComponent,
    AdEditComponent,
    MyprofileEditComponent,
    CapitalizeFirstPipe,
    AdCityFilterPipe,
    AdHaveFilterPipe,
    AdWantFilterPipe,
    CoinEvolutionComponent,
    LandingComponent,
    FileSelectDirective,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, AdService, UserService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
