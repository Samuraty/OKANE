import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";
import { SessionService } from "../../services/session";

@Component({
  selector: "app-ad-detail",
  templateUrl: "./ad-detail.component.html",
  styleUrls: ["./ad-detail.component.css"]
})
export class AdDetailComponent implements OnInit {
  ad;
  user;
  canDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private adService: AdService,
    private router: Router,
    public sessionService: SessionService
  ) {
    this.route.params.subscribe(params => {
      this.adService.get(params.id).subscribe(ad => {
        this.ad = ad;
        this.sessionService.isLogged().subscribe(user => {
          this.user = user;
          if (this.user._id == this.ad.creator._id) this.canDelete = true;
        })
        
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
