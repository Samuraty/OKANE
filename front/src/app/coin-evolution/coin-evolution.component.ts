import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-coin-evolution',
  templateUrl: './coin-evolution.component.html',
  styleUrls: ['./coin-evolution.component.css']
})
export class CoinEvolutionComponent implements OnInit { 
  //Configuración del gráfico
  public doughnutChartLabels: Array<String> = [];
  public doughnutChartData = [{
    data: [],
    lineTension: 0
    }]
  public doughnutChartType: String = 'line';
  public doughnutChartOptions = {
    legend: {
      display:false,
    },
    width: 500,
    height: 300,
  };
  
  
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

  convert(amount, from, to) {  //conversor de 1 moneda
    this.today = Date.now();
    this.convertService.convertCurrency(from, to).subscribe(res => {
      this.resultConvert = Number(Object.values(res)[0]) * amount; //el valor de la moneda sacado de la web de la API * la cantidad
      console.log(this.resultConvert);

      if(from == undefined || to == undefined) { //para que no salga undefined en la página cuando no introduces alguna moneda
        this.convertion = "... PLEASE, SELECT CURRENCIES!"
      } else if(isNaN(this.resultConvert)) {  //para que no salga NaN en la página cuando no introduces cantidad
        this.convertion = 0 + " " + to
      } else {
      this.convertion = (Math.round(this.resultConvert * 100) / 100)+ " " + to; // redondea a 2 decimales
      }
    });
  }

  getDates(fromCurrenty, toCurrency) { //gráfica de la moneda
    // La API necesita las fechas en formato yyyy-mm-dd (como {{today | date: 'y-MM-dd'}}).
    // Cogeré los valores de una semana atrás empezando hoy(lastDate) y hace 7 días (firstDate).
    var date, dd, day, mm, month, year, finalDate, firstDate, lastDate;

    // empiezo definiendo las fechas para la API
    for (let i = 0; i<7; i+=6) {//solo 2 números porque la API pide inicio y final, i=0 y i=6, para conseguir lastDate y firstDate
      date = new Date();
      date.setDate(date.getDate()-i); // resta i días a la fecha actual
      dd = date.getDate();
      mm = date.getMonth()+1; //se pone +1 porque sino Enero te lo considera como 0
      year = date.getFullYear();

      if(dd<10) day ='0'+ dd;
      else day = dd;
      if(mm<10) month = '0'+ mm; 
      else month = mm;

      finalDate = year + '-' + month + '-' + day;  //lo pongo así porque es el formato que me pide mi API
      if(i===0) lastDate = finalDate; // es el día de hoy (el final del intervalo)
      else firstDate = finalDate; // es hace 7 días (el inicio del intervalo)
    }

    // ahora llamo a la API y lleno los arrays para representarlos
    this.datesService.datesCurrency(fromCurrenty, toCurrency, firstDate, lastDate).subscribe(res => {
      this.ratioArray = (Object.values((Object.values(res)[0]))); //guarda los valores de la API (lo da así)
      this.dateArray = (Object.keys((Object.values(res)[0]))); //guarda las keys de la API (lo da así)
      this.doughnutChartLabels = this.dateArray;
      this.doughnutChartData[0].data = this.ratioArray;
      console.log(this.doughnutChartLabels, this.doughnutChartData )
    });
  }
}