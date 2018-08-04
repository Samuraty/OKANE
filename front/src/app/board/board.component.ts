import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ads: Array<any>;
  searchCity: string;
  searchHave: string;
  searchWant: string;

  currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];
  
  constructor(private adService: AdService ) { 
    this.adService.getList().subscribe(data => this.ads = data);
  }

  ngOnInit() {
  }

}

