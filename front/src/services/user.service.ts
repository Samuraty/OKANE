import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'


@Injectable()
export class UserService{
user;
  constructor(private http: Http) {}

  getDetails() {
    return this.http
      .get(`${environment.BASEURL}/api/profile`)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${environment.BASEURL}/api/profile/${id}`)
      .pipe(map(res => res.json()));
  }

  edit(user) {
    console.log(user._id)
    return this.http
      .post(`${environment.BASEURL}/api/user/editNoPic`, user)
      .pipe(map(res => res.json()));
  }

}