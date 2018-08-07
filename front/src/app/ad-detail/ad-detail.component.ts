import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";
import { SessionService } from "../../services/session";
import { ConvertService } from "../../services/convert.service";

@Component({
  selector: "app-ad-detail",
  templateUrl: "./ad-detail.component.html",
  styleUrls: ["./ad-detail.component.css"]
})
export class AdDetailComponent implements OnInit {
  resultConvert: number;
  convertion: string;
  today: number;

  ad = {
    quantity: "",
    have: "",
    want: "",
    creator: {
      _id:""
    },
    _id:""
  };
  user;
  canDelete: boolean = false;
  canEdit: boolean = false;

  executed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private adService: AdService,
    private router: Router,
    private sessionService: SessionService,
    private convertService: ConvertService
  ) {
    this.route.params.subscribe(params => {
      this.adService.get(params.id).subscribe(ad => {
        this.ad = ad;
        this.sessionService.isLogged().subscribe(user => {
          this.user = user;
          if (this.user._id == this.ad.creator._id) this.canDelete = true; //si el usuario coincide con el creador del anuncio puede borrar
          if (this.user._id == this.ad.creator._id) this.canEdit = true;
        });
      });
    });
  }

  ngOnInit() {
    setTimeout(
      () => this.convert(this.ad.quantity, this.ad.have, this.ad.want),
      250
    );
  }

  deleteAd() {
    this.adService
      .remove(this.ad._id)
      .subscribe(() => this.router.navigate(["/ads"]));
  }

  convert(amount, from, to) {
    if (this.executed === false) {
      this.executed = true;
      this.today = Date.now();
      this.convertService.convertCurrency(from, to).subscribe(res => {
        this.resultConvert = Number(Object.values(res)[0]) * amount;
        console.log(this.resultConvert);
        this.convertion = Math.round(this.resultConvert * 100) / 100 + " " + to;
        return this.convertion;
      });
    }
  }
}
