import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  error;
  message: String = "";
  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  login(username:string, password:string){
    console.log("login....");
    this.sessionService.login(username,password).subscribe( user => {
      console.log(user);
      if (user.status != 500) this.router.navigate(['/profile']);
      else this.message = "User doesn't exist"
    });
  }

}
