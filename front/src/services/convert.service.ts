import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http: Http) {}

  convertCurrency(fromCurrency, toCurrency) {

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    const query = fromCurrency + '_' + toCurrency;

    const url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
    + query + '&compact=ultra';

    return this.http
    .get(url)
    .pipe(map(res => res.json()));
  }

}