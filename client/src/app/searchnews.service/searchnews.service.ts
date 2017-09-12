import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchnewsService {
	
	constructor(private http:Http){}
  nameSearch(){
  	return this.http.get("https://newsapi.org/v1/sources?language=en")
  	.map((response:Response)=>{
  		return response.json().sources})
}
newSearch(newsName:any): Observable<any[]>{
		return this.http.get('https://newsapi.org/v1/articles?source='+newsName+'&apiKey=ea8be5cdacf24f92a66c2db28fea7f16')
		.map((response:Response)=>response.json().articles); /*left hand side is the input res and rhs is the output res*/
	}
}
