import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdService } from '../../services/ad.service';
import { SessionService } from "../../services/session";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-myprofile-edit',
  templateUrl: './myprofile-edit.component.html',
  styleUrls: ['./myprofile-edit.component.css']
})
export class MyprofileEditComponent implements OnInit {
  user;

  constructor(
    private sessionService: SessionService,
    private adService: AdService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe(params =>
      this.sessionService.isLogged().subscribe(user => {
        this.user = user;
      })
    )
  }

  ngOnInit() {
  }

  edit(user) {
    this.userService.edit(this.user).subscribe(user => {
      this.user = user;
      this.router.navigate(["/profile"]);
    })
  }
}
