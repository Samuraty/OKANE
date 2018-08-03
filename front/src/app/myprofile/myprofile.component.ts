import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session";
import { Router } from '@angular/router';
import { UserService } from "../../services/user.service";
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user = {
    image:'../../assets/images/profilepic.png',
  };
  ads;
  adList;
  
  constructor(private adService: AdService, private sessionService: SessionService, private userService: UserService, private router:Router) {
    // if (!this.sessionService.user) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.sessionService.isLogged().subscribe(user => this.user = user);
    // }
    this.sessionService.isLogged().subscribe(user => {
      this.user = user;
      console.log(user)
      this.adService
        .getAd(user._id)
        .subscribe(ads => {
          this.adList = ads;
        });
    });

  }

  ngOnInit() {
    //this.adService.getAd(this.user._id).subscribe(ads => this.ads = ads)
  }
}
