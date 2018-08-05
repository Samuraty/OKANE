import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';

@Component({
  selector: 'app-coin-evolution',
  templateUrl: './coin-evolution.component.html',
  styleUrls: ['./coin-evolution.component.css']
})
export class CoinEvolutionComponent implements OnInit {
  currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

  haveConvert: string;
  wantConvert: string;
  quantityConvert: number;
  resultConvert: number;
  convertion: string;
  today: number;

  constructor(public convertService: ConvertService) {}

  ngOnInit() {}

  convert(amount, from, to) {
    this.today = Date.now();
    this.convertService.convertCurrency(from, to).subscribe(res => {
      this.resultConvert = Number(Object.values(res)[0]) * amount;
      console.log(this.resultConvert);

      if(this.resultConvert === NaN) {
        this.convertion = "Please, complete all options."
      }
      this.convertion = (Math.round(this.resultConvert * 100) / 100)+ "" + this.wantConvert;
    });
  }
}