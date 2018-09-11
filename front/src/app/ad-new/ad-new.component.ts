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
  ad = {
    city: "",
    quantity: "",
    have: "",
    want: "",
    creator: "",
    comment: ""
  };

  submit = false; //esto es para el canDeactivate 

  currencies = [
    "EUR",
    "USD",
    "AUD",
    "CNY",
    "KRW",
    "CAD",
    "JPY",
    "GBP",
    "PKR",
    "INR"
  ];
  maxLength = 40; //máximo caracteres para comentarios.

  constructor(
    private adService: AdService,
    private router: Router,
    public sessionService: SessionService
  ) {
    sessionService.isLogged().subscribe(user => (this.ad.creator = user._id));
  }

  ngOnInit() {}

  newAd() {
    this.submit = true; //para evitar que salga la ventana canDeactivate cuando pincho en crear
    console.log(this.ad);
    this.adService.newAd(this.ad).subscribe(() => {
      this.router.navigate(["/ads"]);
    });
  }

  canDeactivate() {  //saltará cuando se escriba en alguno de los campos y quiera salir de la página
    console.log("I am navigating away");
    if (
      this.submit === false && 
      (this.ad.city.length !== 0 ||
      this.ad.quantity.length !== 0 ||
      this.ad.have.length !== 0 ||
      this.ad.want.length !== 0 ||
      this.ad.comment.length !== 0)
    ) {
      return window.confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }
}
