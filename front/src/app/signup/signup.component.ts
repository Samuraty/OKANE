import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session";
import { Router } from "../../../node_modules/@angular/router";
import "jquery";
//import * as $ from 'jquery';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  username;
  email;
  password;
  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
  }

  signup(username: string, email: string, password: string) {
    console.log("signup....");
    this.sessionService
      .signup(username, email, password)
      .subscribe((user: any) => {
        console.log(`WELCOME USER ${user.username}, register OK`);
        console.log(user);
        this.router.navigate(["/profile"]);
      });
  }

  canDeactivate() {
    console.log("I am navigating away");
    // if the editName !== this.user.name
    if (
      this.username.length !== 0 ||
      this.email.length !== 0 ||
      this.password.length !== 0
    ) {
      return window.confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }
}
