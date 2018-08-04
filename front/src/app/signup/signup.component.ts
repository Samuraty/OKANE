import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session";
import { Router } from "../../../node_modules/@angular/router";
import 'jquery';
//import * as $ from 'jquery';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    // (function() {
    //   var inputs = document.querySelectorAll(".form .input-group input");
    //   var button = document.getElementById("login");
    //   console.log(inputs)
    //   inputs.forEach(input => {
    //     input.addEventListener("focusout", e => {
    //       if (e.target.value === "") {
    //         return e.target.classList.remove("has-value");
    //       }

    //       return e.target.classList.add("has-value");
    //     });
    //   });
    // })();
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
}
