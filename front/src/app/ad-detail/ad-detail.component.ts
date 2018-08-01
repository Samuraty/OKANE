import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";

@Component({
  selector: "app-ad-detail",
  templateUrl: "./ad-detail.component.html",
  styleUrls: ["./ad-detail.component.css"]
})
export class AdDetailComponent implements OnInit {
  ad;

  constructor(
    private route: ActivatedRoute,
    private adService: AdService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.adService.get(params.id).subscribe(ad => {
        this.ad = ad;
        console.log(this.ad)
      });
    });
  }
  
  ngOnInit() {}

  deleteAd() {
    this.adService
      .remove(this.ad._id)
      .subscribe(() => this.router.navigate(['/ads']));
  }

}
