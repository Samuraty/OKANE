import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";

@Component({
  selector: "app-ad-new",
  templateUrl: "./ad-new.component.html",
  styleUrls: ["./ad-new.component.css"]
})
export class AdNewComponent implements OnInit {
  newAd = {
    creator:"",
    city: "",
    quantity: "",
    have: "",
    want: "",
  };

  constructor(private adService: AdService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.adService
      .newAd(this.newAd)
      .subscribe(() => this.router.navigate(["/ads"]));
  }
}
