import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session";
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  username;
  email;
  city;
  image;
  rating;

  constructor(private session: SessionService, private router:Router) {
    if (!this.session.user) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.username = this.session.user.username;
    this.email = this.session.user.email;
    this.city = this.session.user.city;
    this.image = this.session.user.image;
    this.rating = this.session.user.rating;
  }

}
