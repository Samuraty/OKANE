import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';

@Component({
  selector: 'app-coin-evolution',
  templateUrl: './coin-evolution.component.html',
  styleUrls: ['./coin-evolution.component.css']
})
export class CoinEvolutionComponent implements OnInit {
  convertion;

  constructor(public convertService: ConvertService) {
    // prueba
    this.convert(10, 'USD', 'EUR');
   }

  ngOnInit() {
  }

  convert(amount, from, to) {
    this.convertService.convertCurrency(from, to).subscribe(res => {
      this.convertion = Number(Object.values(res)[0]) * amount;
      console.log(this.convertion);
      console.log(Math.round(this.convertion * 100) / 100);
    });
  }
}