import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class FavouriteService {

  constructor(private http :Http) { }

  getData(): Observable<any> {
  	const getUrl="http://localhost:3003/getval";
  	return this.http
  	.get(getUrl)
  	.map((response)=>{
  		return <any>response.json().user;
  	})
  }
}
