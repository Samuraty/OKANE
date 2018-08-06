import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';
import { DatesService } from '../../services/dates.service';

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

  date: any;
  dateArray: Array<any> = [];
  ratioArray: Array<any> = [];

  constructor(public convertService: ConvertService, public datesService: DatesService) {}

  ngOnInit() {}

  convert(amount, from, to) {
    this.today = Date.now();
    this.convertService.convertCurrency(from, to).subscribe(res => {
      this.resultConvert = Number(Object.values(res)[0]) * amount;
      console.log(this.resultConvert);

      if(this.resultConvert === NaN) {
        this.convertion = "Please, complete all options."
      }
      this.convertion = (Math.round(this.resultConvert * 100) / 100)+ "" + to;
    });
  }

  getDates(fromCurrenty, toCurrency) {
    // The API needs the dates in format yyyy-mm-dd (like {{today | date: 'y-MM-dd'}}).
    // I will get values for a week starting today (lastDate) and going back 7 days (firstDate).
    var date, dd, day, mm, month, year, finalDate, firstDate, lastDate;

    for (let i = 0; i<7; i+=6) {//only 2 numbers, i=0 and i=6, to get lastDate and firstDate
      date = new Date();
      date.setDate(date.getDate()-i); // substracting days one by one
      dd = date.getDate();
      mm = date.getMonth()+1; //se pone +1 porque sino Enero te lo considera como 0
      year = date.getFullYear();

      if(dd<10) day ='0'+ dd;
      else day = dd;
      if(mm<10) month = '0'+ mm; 
      else month = mm;

      finalDate = year + '-' + month + '-' + day;  //lo pongo así porque es el formato que me pide mi API
      if(i===0) lastDate = finalDate;
      else firstDate = finalDate;
    }
    this.datesService.datesCurrency(fromCurrenty, toCurrency, firstDate, lastDate).subscribe(res => {
      this.ratioArray = (Object.values((Object.values(res)[0])));
      this.dateArray = (Object.keys((Object.values(res)[0])));
      console.log(this.ratioArray);
      console.log(this.dateArray);
    });
  }


}