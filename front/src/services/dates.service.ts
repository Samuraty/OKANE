import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class DatesService {
  
    constructor(private http: Http) {}
  
    datesCurrency(fromCurrency, toCurrency, fromDate, toDate) {
  
      fromCurrency = encodeURIComponent(fromCurrency);
      toCurrency = encodeURIComponent(toCurrency);
      const query = fromCurrency + '_' + toCurrency;
      fromDate = encodeURIComponent(fromDate);
      toDate = encodeURIComponent(toDate);

      const url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
      + query + '&compact=ultra&date=' + fromDate + '&endDate=' + toDate;
  
      return this.http
      .get(url)
      .pipe(map(res => res.json()));
    }
  
  }