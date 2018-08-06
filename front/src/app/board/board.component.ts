import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';
import { UserService } from "../../services/user.service";
import { SessionService } from "../../services/session";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  user = {
    image: "../assets/images/profilepic.png",
  };
  ads: Array<any>;
  searchCity: string;
  searchHave: string;
  searchWant: string;

  currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];
  
  constructor(private adService: AdService, private userService:UserService, private sessionService: SessionService) { 
    this.adService.getList().subscribe(data => {
      this.ads = data;
      console.log(this.ads)
    });
    
  }

  ngOnInit() {
    this.sessionService.isLogged().subscribe(user => {
    this.user = user;
    })
  }
}

