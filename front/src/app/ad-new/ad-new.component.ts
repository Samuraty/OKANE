import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";
import { SessionService } from "../../services/session";

@Component({
  selector: "app-ad-new",
  templateUrl: "./ad-new.component.html",
  styleUrls: ["./ad-new.component.css"]
})
export class AdNewComponent implements OnInit {
  ad = {city:'',
  quantity:'',
  have:'',
  want:'',
  creator:''
  };

  currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

  constructor(private adService: AdService, private router: Router, public sessionService: SessionService) {
    sessionService.isLogged().subscribe(user => this.ad.creator = user._id)
  }

  ngOnInit() {}

  newAd(){
    console.log(this.ad);
    this.adService.newAd(this.ad).subscribe(() => {
      this.router.navigate(["/ads"])
    })
  }
}
