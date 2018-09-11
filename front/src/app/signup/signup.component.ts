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
  submit = false; //esto es para el canDeactivate
  errorMessage = "";

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
  }

  signup(username: string, email: string, password: string) {
    if(username!== undefined && email!== undefined && password!== undefined) {
      this.submit = true;  //para que no salga canDeactivate
      console.log("signup....");
      this.sessionService
        .signup(username, email, password)
        .subscribe((user: any) => {
          console.log(`WELCOME USER ${user.username}, register OK`);
          console.log(user);
          this.router.navigate(["/profile"]);
        });
    } else {
      this.errorMessage = "Please, complete all fields."
    }
  }

  canDeactivate() {
    console.log("I am navigating away");
    if (
      this.submit === false && 
      (this.username !== undefined ||
      this.email !== undefined ||
      this.password !== undefined)
    ) {
      return window.confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }
}
