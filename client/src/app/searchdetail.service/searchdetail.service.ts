import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchdetailService {

  constructor(private http:Http) { }

  saveData( newsdata:any) : Observable<any> {
		const url: string ="http://localhost:3003/users";
			let Data: any ={};
					Data.author=newsdata.author;
					Data.title=newsdata.title;
					Data.description=newsdata.description;
					Data.urlToImage=newsdata.urlToImage;
					return this.http
					.post(url,Data)
					.map((res:Response)=> <any[]>res.json());

	}

}