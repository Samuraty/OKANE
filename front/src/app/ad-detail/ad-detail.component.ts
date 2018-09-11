import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { AdService } from "../../services/ad.service";
import { SessionService } from "../../services/session";
import { ConvertService } from "../../services/convert.service";
import { ChatService } from "../../services/chat.service";

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

  executed: boolean = false; //para evitar llamadas constantes a la API y evitar el bloqueo por ip (límite 100 usos por hora)

  constructor(
    private route: ActivatedRoute,
    private adService: AdService,
    private router: Router,
    private sessionService: SessionService,
    private convertService: ConvertService,
    public chatService: ChatService
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
    setTimeout(  // evitar que me de error al correr la función de convert antes de que haya cargado las variables quantity, have y want (ngAfterViewInit no funciona)
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
        this.resultConvert = Number(Object.values(res)[0]) * amount;  //el valor de la moneda sacado de la web de la API * la cantidad
        console.log(this.resultConvert);
        this.convertion = Math.round(this.resultConvert * 100) / 100 + " " + to; // redondea a 2 decimales
        return this.convertion;
      });
    }
  }
}
