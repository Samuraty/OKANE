import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class DatesService {
  
    constructor(private http: Http) {}
  
    datesCurrency(fromCurrency, toCurrency, fromDate, toDate) {
      //como voy a crear una URL por componentes tengo que usar encodeURIComponent
      fromCurrency = encodeURIComponent(fromCurrency); //escapa los caracteres que pueden dar un error al enviarlo por HTTP, esto permite crear el query
      toCurrency = encodeURIComponent(toCurrency);
      const query = fromCurrency + '_' + toCurrency; //la API lo pide en este formato
      fromDate = encodeURIComponent(fromDate);
      toDate = encodeURIComponent(toDate);

      const url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
      + query + '&compact=ultra&date=' + fromDate + '&endDate=' + toDate;
  
      return this.http
      .get(url)
      .pipe(map(res => res.json()));
    }
  
  }