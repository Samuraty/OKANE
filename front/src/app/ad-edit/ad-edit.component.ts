import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdService } from '../../services/ad.service';
import { SessionService } from "../../services/session";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-ad-edit',
  templateUrl: './ad-edit.component.html',
  styleUrls: ['./ad-edit.component.css']
})
export class AdEditComponent implements OnInit {
  ad;
  user;
  canEdit: boolean = false;

  currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];
  maxLength = 40;  //máximo caracteres para comentarios.

  constructor(
    private sessionService: SessionService,
    private adService: AdService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.adService.get(params.id).subscribe(ad => {
        this.ad = ad;
        this.sessionService.isLogged().subscribe(user => {  
          this.user = user;
          if (this.user._id == this.ad.creator._id) this.canEdit = true; //si el usuario coincide con el creador del anuncio puede editar
        })
      });
    });
   }

  ngOnInit() {}

  edit(ad) {
    this.adService.edit(this.ad).subscribe(ad => {
      this.ad = ad;
      this.router.navigate(['/ad',ad._id]);
    })
  }
}
