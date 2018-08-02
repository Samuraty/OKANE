import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/api/ad`)
      .pipe(map(res => res.json()));
  }

  newAd(ad) {
    return this.http
      .post(`${this.BASE_URL}/api/ad`, ad)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/ad/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(ad) {
    return this.http
      .put(`${this.BASE_URL}/api/ad/edit/${ad._id}`, ad)
      .pipe(map(res => res.json()));
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/ad/${id}`)
      .pipe(map(res => res.json()));
  } 

}